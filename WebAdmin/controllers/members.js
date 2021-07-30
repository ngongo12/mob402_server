const memberSer = require('../services/members');

exports.get = () => {
    return memberSer.get();
}