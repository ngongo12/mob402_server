var express = require('express');
var router = express.Router();
const auth = require('../middle/auth');

const protuctCont = require('../controllers/products');
const brandCont = require('../controllers/brands')

router.get('/', async function(req, res, next) {
    
    const products = await protuctCont.get();
    const brands = await brandCont.get();
    res.json({ products: products, brands: brands });
});

router.get('/:id', async function(req, res, next) {
    
    const {
        params:{id},
    } = req
    const product = await protuctCont.getById(id);
    res.json({product});
});



module.exports = router;