const { User } = require("../models");
const {
    validChangePassword,
    validChangeEmail,
    validRegister,
} = require("../utils/validForm");
const { comparePassword, hashPassword } = require("../utils/hash");

module.exports = {
    getUser: async (id) => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                const error = new Error("User not found");
                error.status = 404;
                throw error;
            }
            return user;
        } catch (error) {
            throw error;
        }
    },
    register: async (email, name, password, repeat_password) => {
        try {
            const { error } = validRegister({
                email,
                name,
                password,
                repeat_password,
            });
            if (error) {
                const err = new Error(error.details[0].message);
                err.status = 400;
                throw err;
            }
            const user = await User.findOne({ where: { email } });
            if (user) {
                const error = new Error("Email already exists");
                error.status = 400;
                throw error;
            }
            const hPassword = hashPassword(password);
            const newUser = await User.create({
                email,
                name,
                password: hPassword,
            });
            return newUser;
        } catch (error) {
            throw error;
        }
    },
    changePassword: async (id, oldPassword, password, repeat_password) => {
        try {
            const { error } = validChangePassword({
                oldPassword,
                password,
                repeat_password,
            });
            if (error) {
                const err = new Error(error.details[0].message);
                err.status = 400;
                err.message = error.details[0].message;

                throw err;
            }
            const user = await User.findByPk(id);
            if (!user) {
                const error = new Error("User not found");
                error.status = 404;
                error.message = "User not found";
                throw error;
            }
            if (!comparePassword(oldPassword, user.password)) {
                const error = new Error("Unauthorized");
                error.status = 401;
                error.message = "Password is incorrect";
                throw error;
            }
            console.log(password, user.password);

            const hPassword = hashPassword(password);

            user.password = hPassword;
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    },
    changeEmail: async (id, password, email, repeat_email) => {
        try {
            const { error } = validChangeEmail({
                email,
                repeat_email,
            });

            if (error) {
                const err = new Error(error.details[0].message);
                err.status = 400;
                throw err;
            }

            const checkUser = await User.findOne({ where: { email } });

            if (checkUser) {
                const error = new Error("Email already exists");
                error.status = 400;
                throw error;
            }
            const user = await User.findByPk(id);
            if (!comparePassword(password, user.password)) {
                const error = new Error("Unauthorized");
                error.status = 401;
                error.message = "Password is incorrect";
                throw error;
            }
            user.email = email;
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    },
};
