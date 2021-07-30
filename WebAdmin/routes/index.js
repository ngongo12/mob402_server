var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');
const jwt = require('jsonwebtoken')
const auth = require('../middle/auth');


/* GET home page. */
router.get('/', [auth.checkLogin],function(req, res, next) {
  res.redirect("/dashboard");
});

router.get('/login',function(req, res, next) {
  res.render('index', { title: 'Login' });
});

//Login
router.post('/', async function(req, res, next) {

  const {username, password} = req.body;
  console.log(username)
  const check = await userController.get(username, password);

  console.log(">>> router: check: ", check)

  if(check)
  {
    const access_token = jwt.sign({id: 1, username: username}, process.env.JWT_SECRET_KEY)
    req.session.access_token = access_token;
    res.redirect("/dashboard");
  }
  else {
    res.render('index', { err: true });
  }
});

router.get('/logout', [auth.checkLogin],function(req, res, next) {
  req.session.destroy(function(err){
    res.redirect("/login")
  })
});


router.get('/dashboard', [auth.checkLogin], function(req, res, next) {
  res.render('dashboard', { title: 'Admin Page' });
});


router.get('/orders', [auth.checkLogin], function(req, res, next) {
  res.render('orders', { title: 'Admin Page' });
});

router.get('/charts', [auth.checkLogin], function(req, res, next) {
  res.render('charts', { title: 'Admin Page' });
});

router.get('/addnew', [auth.checkLogin], function(req, res, next) {
  res.render('addnew', { title: 'Admin Page' });
});

router.get('/change_password', [auth.checkLogin], function(req, res, next) {
  res.render('changspassword', { title: 'Admin Page' });
});




module.exports = router;
