const {
    JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRE,
    JWT_REFRESH_EXPIRE,
    JWT_REFRESH_SECRET,
} = process.env;

const jwt = require("jsonwebtoken");
module.exports = {
    createAccessToken: (data, expire = JWT_ACCESS_EXPIRE) => {
        const token = jwt.sign(data, JWT_ACCESS_SECRET, {
            expiresIn: expire,
        });
        return token;
    },
    verifyAccessToken: (accessToken) => {
        return jwt.verify(accessToken, JWT_ACCESS_SECRET);
    },
    createRefreshToken: (userId) => {
        const token = jwt.sign(
            { userId, secretValue: `${new Date().getTime()}-${Math.random()}` },
            JWT_REFRESH_SECRET,
            {
                expiresIn: JWT_REFRESH_EXPIRE,
            }
        );
        return token;
    },
    verifyRefreshToken: (refreshToken) => {
        return jwt.verify(refreshToken, JWT_REFRESH_SECRET);
    },
};
