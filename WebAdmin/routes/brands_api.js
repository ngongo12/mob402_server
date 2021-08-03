var express = require('express');
var router = express.Router();
const auth = require('../middle/auth');
const upload = require('../middle/upload');

const brandCont = require('../controllers/brands')

router.get('/', async function(req, res, next) {
    const brands = await brandCont.get();
    res.json({ brands: brands });
});

module.exports = router;