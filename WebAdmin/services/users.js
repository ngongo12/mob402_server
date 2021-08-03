
const userModel = require('../models/userModel')

exports.get = async function getAllStudents(username) {
    
    const user = await userModel.findOne({username: username}, 'username password')
    console.log('>>>>>>>>',user);
    return user;
}