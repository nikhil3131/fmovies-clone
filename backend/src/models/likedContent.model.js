const { sequelize } = require("../db/config");
const { DataTypes, Model } = require("sequelize");
const { User } = require("./user.model");

class LikedContent extends Model {}

LikedContent.init(
    {
        content_id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: "user_id",
            },
        },
    },
    { sequelize, tableName: "likedContents" }
);

;(async function(){
    try {
        await LikedContent.sync({ alter: true });
        console.log("The table for the User model was just (re)created!");
    } catch (error) {
        console.log("unable to sync likedContent model")
    }
})()

module.exports = {
    LikedContent
}