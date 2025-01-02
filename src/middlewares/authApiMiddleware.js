const { verifyAccessToken } = require("../utils/jwt");
const { getUser } = require("../services/user.service");
const { errorResponse } = require("../utils/response");
const redis = require("../utils/redis");
module.exports = async (req, res, next) => {
    try {
        const { sessionId } = req.cookies;
        if (!sessionId) {
            const error = new Error("Unauthorized");
            error.status = 401;
            error.message = "Unauthorized or session expired";
            throw error;
        }
        const accessToken = req.get("Authorization")?.split(" ")[1];

        const { userId } = verifyAccessToken(accessToken);
        await redis.connect();
        const blacklist = await redis.get(`Blacklist:${accessToken}`);
        await redis.close();

        if (blacklist) {
            throw new Error("Unauthorized");
        }
        const user = await getUser(userId);
        req.user = user;
        req.accessToken = accessToken;
        next();
    } catch (error) {
        return errorResponse({
            res,
            errors: error.message,
            status: 401,
            message: "Unauthorized or session expired",
        });
    }
};
