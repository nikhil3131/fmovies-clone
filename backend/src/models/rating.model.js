const { sequelize } = require("../db/config");
const { DataTypes, Model } = require("sequelize");
const { User } = require("./user.model");

class Ratings extends Model {}

Ratings.init(
    {
        rating_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        content_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: "user_id",
            },
        },
    },
    { sequelize, tableName: "ratings", timestamps: false }
);
