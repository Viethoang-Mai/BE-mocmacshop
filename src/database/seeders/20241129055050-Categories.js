"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("categories", [
            {
                name: "Artisan Necklaces",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676341/artisan-necklaces-5_td7lwf.avif",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Bracelets",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676372/handmade-bracelets-9_xcncwq.png",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Ceramics",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676388/handmade-ceramics-7_hevo5q.webp",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Handmade Knitted Items",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676406/handmade-knitted-items-5_lkmcsl.jpg",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wicker Crafts",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676457/wicker-crafts-7_baahb7.webp",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: "Wooden Miniatures",
                image_url:
                    "https://res.cloudinary.com/dszxqzf9t/image/upload/v1729676483/wooden-miniatures-2_sztlpc.jpg",
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("categories", null, {});
        await queryInterface.sequelize.query(
            `TRUNCATE TABLE categories RESTART IDENTITY CASCADE`
        );
    },
};
