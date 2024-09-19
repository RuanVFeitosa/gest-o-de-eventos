const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("gestaodeeventos", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;