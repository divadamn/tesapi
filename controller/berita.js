const model = require('../models/index');
const controller = {};

controller.getAll = async function(req, res) {
    try {
        let berita = await model.berita.findAll()
        if (berita.length > 0) {
            berita = berita.map(news => ({
                id_news: news.id_news,
                judul_news: news.judul_news,
                url_news: news.url_news,
                gambar_news: news.gambar_news.toString('base64')
            }));
            res.status(200).json({
                message: "Get method Berita",
                data: berita
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
        let berita = await model.berita.create({
            judul_news: req.body.judul_news,
            url_news: req.body.url_news,
            gambar_news: req.body.gambar_news,
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