const Sequelize = require('sequelize');
const db = require('../database/mysql');

let berita = db.define('berita',
{
    id_news: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    judul_news: {type: Sequelize.STRING},
    url_news: {type: Sequelize.STRING},
    gambar_news: {type: Sequelize.BLOB},
},
{
    freezeTableName: true,
    timestamps: false,
});

module.exports = berita;