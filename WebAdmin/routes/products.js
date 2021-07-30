var express = require('express');
var router = express.Router();
const auth = require('../middle/auth');

const protuctCont = require('../controllers/products');
const brandCont = require('../controllers/brands')

router.get('/',[auth.checkLogin], async function(req, res, next) {
    
    const products = await protuctCont.get();
    const brands = await brandCont.get();
    res.render('products', { products: products, brands: brands });
});

router.delete('/delete/:id', [auth.checkLogin], async function(req, res, next) {
    const {
        params : {id},
    } = req
    await protuctCont.delete(id);
    res.json({result: true}); 
});

router.post('/update/:id', [auth.checkLogin], async function(req, res, next) {
    let {params, body} = req;
    const isDeleted = await protuctCont.update(params, body);

    res.redirect('/products', {isDeleted: isDeleted});
});

router.post('/add', [auth.checkLogin], async function(req, res, next) {
    let {body} = req;
    await protuctCont.add(body);

    res.redirect('/products');
});

module.exports = router;