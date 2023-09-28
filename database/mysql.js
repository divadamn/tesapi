// const Sequelize = require('sequelize');

// const db = new Sequelize('revou', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
// });

// module.exports = db;
const Sequelize = require('sequelize');

const db = new Sequelize('freedb_revou_capstone', 'freedb_group_2', '$CFUexYGKj&8QU5', {
    host: 'sql.freedb.tech',
    dialect: 'mysql',
    port: 3306,
});

module.exports = db;
