const { sequelize } = require("../db/config");
const { DataTypes, Model } = require("sequelize");

class User extends Model {}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
            args: true,
            msg: "Email address already in use!",
        },
        validate: {
            isEmail: {
                args: true,
                msg: "Provide a valid email",
            },
        },
    },
    password: {
        type: DataTypes.STRING(12),
        allowNull: false,
        validate: {
            len: {
                args: [6, 12],
                msg: "Password must be in between 6 to 12 characters",
            },
        },
    },
},{
    sequelize,
    modelName: 'User',
    tableName: 'users'
});

;(async function(){
    try {
        await User.sync({ alter: true });
        console.log("The table for the User model was just (re)created!");
    } catch (error) {
        console.log("unable to sync user model")
    }
})()

module.exports = {
    User
}