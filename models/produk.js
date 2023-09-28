const Sequelize = require('sequelize');
const db = require('../database/mysql');

let produk = db.define('produk',
{
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nama_produk: {type: Sequelize.STRING},
    harga_produk: {type: Sequelize.INTEGER},
    gambar_produk: {type: Sequelize.BLOB},
},
{
    freezeTableName: true,
    timestamps: false,
});

module.exports = produk;