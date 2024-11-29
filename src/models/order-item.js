"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class OrderItem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            OrderItem.belongsTo(models.Order, {
                foreignKey: "order_id",
                as: "order",
            });
            OrderItem.belongsTo(models.Product, {
                foreignKey: "product_id",
                as: "product",
            });
        }
    }
    OrderItem.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            order_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "orders",
                    },
                    key: "id",
                },
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "products",
                    },
                    key: "id",
                },
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            total: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "OrderItem",
            tableName: "order_items",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return OrderItem;
};
