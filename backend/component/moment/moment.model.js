const Sequelize = require("sequelize");
const dbConnection = require('../shared/DBConnection');

const Moments = dbConnection.define('moments',{
    id : {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING(100)
    },
    description: {
        type: Sequelize.STRING(255)
    },
    is_deleted: {
        type: Sequelize.BOOLEAN
    },
    is_updated :{
        type: Sequelize.BOOLEAN
    }

});

//  //force: true will drop the table if it already exists
//   Moments.sync({force: true}).then(() => {
//     // Table created
//     return Moments.create({
//         name: 'Awarded in game',
//         description: 'Very good experience',
//         is_deleted : false,
//         is_updated : false
//     });
//   });

module.exports = Moments

