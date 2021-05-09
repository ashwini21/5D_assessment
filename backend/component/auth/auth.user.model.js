const Sequelize = require("sequelize");
const dbConnection = require('../shared/DBConnection');

const Users = dbConnection.define('users',{
    id : {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING(100)
    },
    email: {
        type: Sequelize.STRING(100)
    },
    password: {
        type: Sequelize.STRING(255)
    },
    city :{
        type: Sequelize.STRING(20)
    }

});

 //force: true will drop the table if it already exists
//   Users.sync({force: true}).then(() => {
//     // Table created
//     return Users.create({
//         name: 'John Smith',
//         email: 'john@email.com',
//         password : '7u8i9o0p',
//         city : 'Pune'
//     });
//   });

module.exports = Users

