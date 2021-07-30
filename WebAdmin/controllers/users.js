const usersSer = require('../services/users');
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.get = async function getAllStudents(username, password) {

    const user = await usersSer.get(username);
    if(!user)
    {
        return false;
    }
    else {
        return await bcrypt.compare(password, user.password);
    }
}