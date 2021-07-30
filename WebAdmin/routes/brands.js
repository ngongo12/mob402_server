var express = require('express');
var router = express.Router();
const auth = require('../middle/auth');
const upload = require('../middle/upload');

const brandCont = require('../controllers/brands')

router.get('/',[auth.checkLogin], async function(req, res, next) {
    const brands = await brandCont.get();
    res.render('brands', { brands: brands });
});

router.post('/add', [auth.checkLogin, upload.single('image')], function(req, res, next) {
    let {body, file} = req;

    if(file){
        let image = '/images/' + file.originalname;
        body = {...body, image}
    }
    else{
        image = '/images/default.png'
        body = {...body, image}
    }

    brandCont.add(body);

    res.redirect('/brands');
});

router.post('/update/:id', [auth.checkLogin, upload.single('image')], function(req, res, next) {
    let {params, body, file} = req;
    if(file){
        let image = '/images/' + file.originalname;
        body = {...body, image}
    }
    brandCont.update(params, body);

    res.redirect('/brands');
});

module.exports = router;