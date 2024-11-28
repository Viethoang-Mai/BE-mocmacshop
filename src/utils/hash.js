const bcrypt = require("bcrypt");

module.exports = {
    hashPassword: (password) => {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    },

    comparePassword: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    },
};
