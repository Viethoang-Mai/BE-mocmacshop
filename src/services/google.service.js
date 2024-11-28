const { getUserInfo } = require("../utils/verifyGG");
const { User } = require("../models/index");

module.exports = {
    loginGoogleService: async (token) => {
        try {
            const user = await getUserInfo(token);

            if (!user) {
                const error = new Error("Unauthorized");
                error.status = 401;
                error.message = "Google token is expired";
                throw error;
            }
            const checkUser = await User.findOne({
                where: { email: user.email },
            });
            if (checkUser) {
                return checkUser;
            }
            const newUser = await User.create({
                email: user.email,
                name: user.name,
                image_url: user.picture,
                bio: "Google user",
            });

            return newUser;
        } catch (error) {
            throw error;
        }
    },
};
