const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const produkRoutes = require('./routes/produk');
const beritaRoutes = require('./routes/berita');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/produk', produkRoutes);
app.use('/berita', beritaRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});