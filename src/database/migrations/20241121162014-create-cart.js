"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("carts", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: "users",
                    },
                    key: "id",
                },
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: "products",
                    },
                    key: "id",
                },
            },
            quantity: {
                type: Sequelize.INTEGER,
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date(),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("carts");
    },
};
