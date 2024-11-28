"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Order.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "user",
            });
            Order.hasMany(models.OrderItem, {
                foreignKey: "order_id",
                as: "orderItems",
            });
        }
    }
    Order.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "users",
                    },
                    key: "id",
                },
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            note: {
                type: DataTypes.STRING,
            },
            payment_method: {
                type: DataTypes.STRING,
            },
            status_payment: {
                type: DataTypes.STRING,
            },

            total_price: {
                type: DataTypes.DECIMAL(10, 2),
            },
            status: {
                type: DataTypes.ENUM(
                    "pending",
                    "shipped",
                    "delivered",
                    "cancelled"
                ),
            },
        },
        {
            sequelize,
            modelName: "Order",
            tableName: "orders",
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
        }
    );
    return Order;
};
