var express = require('express');
var router = express.Router();
const auth = require('../middle/auth');

const memberConts = require('../controllers/members')

router.get('/',[auth.checkLogin], function(req, res, next) {
    const members = memberConts.get();
    res.render('users', { members: members });
});

module.exports = router;