var express = require('express');
var router = express.Router();
const auth = require('../middle/auth');

const protuctCont = require('../controllers/products');
const brandCont = require('../controllers/brands')

router.get('/',[auth.checkLogin], function(req, res, next) {
    
    const products = protuctCont.get();
    const brands = brandCont.get();
    res.render('products', { products: products, brands: brands });
});

router.delete('/delete/:id', [auth.checkLogin], function(req, res, next) {
    const {
        params : {id},
    } = req
    protuctCont.delete(id);
    res.json({result: true}); 
});

router.post('/update/:id', [auth.checkLogin], function(req, res, next) {
    let {params, body} = req;
    protuctCont.update(params, body);

    res.redirect('/products');
});

router.post('/add', [auth.checkLogin], function(req, res, next) {
    let {body} = req;
    protuctCont.add(body);

    res.redirect('/products');
});

module.exports = router;