const model = require('../models/index');
const controller = {};

controller.getAll = async function(req, res) {
    try {
        let produk = await model.produk.findAll()
        if (produk.length > 0) {
            produk = produk.map(product => ({
                id: product.id,
                nama_produk: product.nama_produk,
                harga_produk: product.harga_produk,
                gambar_produk: product.gambar_produk.toString('base64')
            }));
            res.status(200).json({
                message: "Get method Produk",
                data: produk
            })
        } else {
            res.status(200).json({
                message: "Tidak ada Data",
                data: []
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

controller.post = async function(req, res) {
    try {
        let produk = await model.produk.create({
            nama_produk: req.body.nama_produk,
            harga_produk: req.body.harga_produk,
            gambar_produk: req.body.gambar_produk,
        })
        res.status(201).json({
                message: "Berhasil tambah Data",
                data: produk
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = controller;