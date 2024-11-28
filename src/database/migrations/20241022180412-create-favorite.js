"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("favorites", {
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
        await queryInterface.addConstraint("favorites", {
            fields: ["user_id", "product_id"],
            type: "unique",
            name: "unique_user_product",
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint(
            "favorites",
            "unique_user_product"
        );
        await queryInterface.dropTable("favorites");
    },
};
