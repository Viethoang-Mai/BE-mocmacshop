"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Favorite extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Favorite.belongsTo(models.User, {
                foreignKey: "user_id",
                as: "user",
            });
            Favorite.belongsTo(models.Product, {
                foreignKey: "product_id",
                as: "product",
            });
        }
    }
    Favorite.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: "users",
                    },
                    key: "id",
                },
            },
            product_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: "products",
                    },
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "Favorite",
            tableName: "favorites",
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return Favorite;
};
