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
            {
                product_id: 3,
                user_id: 1,
                rating: 5,
                content: "This is a review",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                product_id: 4,
                user_id: 1,
                rating: 3,
                content: "This is a review",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                product_id: 15,
                user_id: 1,
                rating: 2,
                content: "This is a review",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                product_id: 9,
                user_id: 1,
                rating: 3,
                content: "This is a review",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                product_id: 20,
                user_id: 1,
                rating: 5,
                content: "This is a review",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                product_id: 20,
                user_id: 1,
                rating: 4,
                content: "This is a review",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                product_id: 17,
                user_id: 1,
                rating: 5,
                content: "This is a review",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                product_id: 17,
                user_id: 1,
                rating: 4,
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
