const express = require("express");
const router = express.Router();
const searchProduct = require('../controller/searchController');

// search endpoint
router.get('/api/search/:keyword', searchProduct);

// homepage endpoint
router.get('', (req, res) => {
    return res
        .status(200)
        .send({message: `Acess http://localhost:${process.env.PORT}/api/search/'your search keyword' to search a product in Amazon website.`})
        .end();
});

module.exports = router;