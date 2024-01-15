const { Sequelize } = require("sequelize");
const { DATABASE_NAME } = require("../constant");

const sequelize = new Sequelize(
    DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: "localhost",
        port: 3306,
        dialect: "mysql",
    }
);

async function connect() {
    try {
        await sequelize.authenticate();
        console.log("Successfully connected with the database.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

module.exports = {
    sequelize,
    connect,
};
