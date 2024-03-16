const express = require("express");
const router = express.Router();
const searchProduct = require('../controller/searchController');

// search endpoint
router.get('/api/search/:keyword', searchProduct);
router.get('', (req, res) => {
    return res.status(200).send(`<h2>Acess http://localhost:${process.env.PORT}/api/search/'your search keyword' to search a product in Amazon website.<\h2>`).end();
});

module.exports = router;