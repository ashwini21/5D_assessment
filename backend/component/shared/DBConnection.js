const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({path : '../../.env'})

const dbConnection = new Sequelize('5D', 'root', null , {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
  });
module.exports = dbConnection