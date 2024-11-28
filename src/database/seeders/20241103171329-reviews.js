"use strict";

const user = require("../../models/user");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("reviews", [
            {
                product_id: 1,
                user_id: 1,
                rating: 5,
                content: "This is a review",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                product_id: 1,
                user_id: 1,
                rating: 3,
                content: "This is a review",
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("reviews", null, {});
        await queryInterface.sequelize.query(
            `TRUNCATE TABLE reviews RESTART IDENTITY CASCADE`
        );
    },
};
