const { User } = require("../models/index");
const { successResponse, errorResponse } = require("../utils/response");
const {
    changePassword,
    register,
    changeEmail,
} = require("../services/user.service");
module.exports = {
    register: async (req, res) => {
        try {
            const { email, name, password, repeat_password } = req.body;
            const newUser = await register(
                email,
                name,
                password,
                repeat_password
            );

            return successResponse({
                res,
                data: newUser,
                message: "Create user successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Create user failed",
            });
        }
    },
    changeName: async (req, res) => {
        try {
            const { id } = req.user;

            const { name } = req.body;
            const user = await User.findByPk(id);
            if (!user) {
                const error = new Error("User not found");
                error.status = 404;
                throw error;
            }
            user.name = name;
            await user.save();
            const userData = user.toJSON();
            delete userData.password;
            return successResponse({
                res,
                data: userData,
                message: "Change name successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
                message: "Change name failed",
            });
        }
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
    changeEmail: async (req, res) => {
        try {
            const { id } = req.user;
            const { password, email, confirmEmail } = req.body;
            console.log(id, password, email, confirmEmail);

            const user = await changeEmail(id, password, email, confirmEmail);
            const userData = user.toJSON();
            delete userData.password;
            return successResponse({
                res,
                data: userData,
                message: "Change email successfully",
            });
        } catch (error) {
            return errorResponse({
                res,
                errors: error.message,
                status: error.status || 500,
            });
        }
    },
};
