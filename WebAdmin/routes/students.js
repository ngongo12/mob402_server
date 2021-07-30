var express = require('express');
var router = express.Router();
const auth = require('../middle/auth');

const studentCont = require('../controllers/student')

router.get('/',[auth.checkLogin], function(req, res, next) {
    
    const students = studentCont.get();
    res.render('student', { students: students });
});

module.exports = router;