"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Product.belongsTo(models.Category, {
                foreignKey: "category_id",
                as: "category",
            });
            Product.hasMany(models.Review, {
                foreignKey: "product_id",
                as: "reviews",
            });
            Product.hasMany(models.Favorite, {
                foreignKey: "product_id",
                as: "favorites",
            });
            Product.hasMany(models.OrderItem, {
                foreignKey: "product_id",
                as: "orderItems",
            });
            Product.hasMany(models.Cart, {
                foreignKey: "product_id",
                as: "carts",
            });
        }
    }
    Product.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
            description: DataTypes.STRING,
            image_url: DataTypes.STRING,
            stock: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Product",
            tableName: "products",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return Product;
};
