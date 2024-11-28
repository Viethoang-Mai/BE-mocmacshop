const { Model } = require("sequelize");
const { User, Cart } = require("../models/index");

module.exports = {
    getUserByEmail: async (email) => {
        try {
            const user = await User.findOne({
                where: { email },
            });
            if (!user) {
                const error = new Error("User not found");
                error.status = 404;
                error.message = "Email or password is incorrect";
                throw error;
            }
            return user;
        } catch (error) {
            throw error;
        }
    },
};
