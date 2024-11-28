"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.Review, {
                foreignKey: "user_id",
                as: "reviews",
            });
            User.hasMany(models.Favorite, {
                foreignKey: "user_id",
                as: "favorites",
            });
            User.hasMany(models.Cart, {
                foreignKey: "user_id",
                as: "carts",
            });
            User.hasMany(models.Order, {
                foreignKey: "user_id",
                as: "orders",
            });
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            image_url: DataTypes.STRING,
            bio: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return User;
};
