const { successResponse, errorResponse } = require("../utils/response");
const { getUserByEmail } = require("../services/auth.service");
const { comparePassword, hashPassword } = require("../utils/hash");
const { changePassword } = require("../services/user.service");
const redis = require("../utils/redis");
const { v4: uuidv4 } = require("uuid");
const { loginGoogleService } = require("../services/google.service");
const { User } = require("../models/index");

const {
    createAccessToken,
    createRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
} = require("../utils/jwt");
module.exports = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                const error = new Error("Missing required fields");
                error.status = 400;
                throw error;
            }

            const user = await getUserByEmail(email);

            if (!comparePassword(password, user.password)) {
                const error = new Error("Unauthorized");
                error.status = 401;
                error.message = "Email or password is incorrect";
                throw error;
            }
            const accessToken = createAccessToken({ userId: user.id });
            const refreshToken = createRefreshToken(user.id);
            const sessionId = uuidv4();

            await redis.connect();
            await redis.set(
                `session:${sessionId}`,
                refreshToken,
                100 * 60 * 60
            );
            await redis.close();
            res.cookie("sessionId", sessionId, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
                maxAge: 100 * 60 * 60 * 1000,
            });

            const userData = user.toJSON();
            delete userData.password;

            return successResponse({
                res,
                data: {
                    user: userData,
                    accessToken,
                    // refreshToken,
                },
                message: "Login successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Login failed",
            });
        }
    },
    profile: async (req, res) => {
        const user = req.user;
        const userData = user.toJSON();
        delete userData.password;
        return successResponse({
            res,
            data: userData,
            message: "Get profile successfully",
        });
    },

    changePassword: async (req, res) => {
        try {
            const { id } = req.user;
            const { oldPassword, password, confirmPassword } = req.body;
            const user = await changePassword(
                id,
                oldPassword,
                password,
                confirmPassword
            );
            const userData = user.toJSON();
            delete userData.password;
            return successResponse({
                res,
                data: userData,
                message: "Change password successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Change password failed",
            });
        }
    },
    logout: async (req, res) => {
        const { accessToken } = req;

        const sessionId = req.cookies.sessionId;
        if (sessionId) {
            await redis.connect();
            await redis.delete(`session:${sessionId}`);
            await redis.close();
        }
        const { exp } = verifyAccessToken(accessToken);
        const expTime = Math.floor(exp - Date.now() / 1000);
        await redis.connect();
        await redis.set(`Blacklist:${accessToken}`, accessToken, expTime);

        await redis.close();
        res.clearCookie("sessionId", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
        });
        return successResponse({
            res,
            message: "Logout Successfully",
        });
    },
    refreshToken: async (req, res) => {
        try {
            const sessionId = req.cookies.sessionId;

            if (!sessionId) {
                const error = new Error("Unauthorized");
                error.status = 401;
                error.message = "Unauthorized";
                throw error;
            }
            await redis.connect();

            const refreshToken = await redis.get(`session:${sessionId}`);
            await redis.close();

            if (!refreshToken) {
                const error = new Error("Unauthorized");
                error.status = 401;
                error.message = "Unauthorized or session expired";
                throw error;
            }
            const { userId } = verifyRefreshToken(refreshToken);

            const accessToken = createAccessToken({ userId });
            return successResponse({
                res,
                data: {
                    accessToken,
                },
                message: "Refresh token successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Refresh token failed",
            });
        }
    },
    googleLogin: async (req, res) => {
        try {
            const { token, expires_in } = req.body;
            const user = await loginGoogleService(token);
            console.log(user);

            const accessToken = createAccessToken(
                { userId: user.id },
                expires_in
            );
            const refreshToken = createRefreshToken(user.id);
            const sessionId = uuidv4();

            await redis.connect();
            await redis.set(
                `session:${sessionId}`,
                refreshToken,
                100 * 60 * 60
            );
            await redis.close();

            res.cookie("sessionId", sessionId, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
                maxAge: 100 * 60 * 60 * 1000,
            });

            return successResponse({
                res,
                data: {
                    user,
                    accessToken,
                },
                message: "Login successfully with google",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Login failed with google",
            });
        }
    },
};
