require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE } = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        host: DB_HOST,
        dialect: "postgres",
        // logging: true,
    },
    test: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        host: DB_HOST,
        dialect: "postgres",
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        host: DB_HOST,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};
