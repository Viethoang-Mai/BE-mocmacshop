"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Cart.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "user",
            });
            Cart.belongsTo(models.Product, {
                foreignKey: "product_id",
                as: "products",
            });
        }
    }
    Cart.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            price: DataTypes.DECIMAL(10, 2),
        },
        {
            sequelize,
            modelName: "Cart",
            tableName: "carts",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return Cart;
};
