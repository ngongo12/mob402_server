const studentSer = require('../services/student');


exports.get = function getAllStudents() {
    return studentSer.get();
}