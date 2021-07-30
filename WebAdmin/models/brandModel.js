const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    //{ id: 1, name:"MacBook" ,image: '/images/mac.png', amount: 120 },
    id: {type : ObjectId},
    name: {type: String},
    image: {type: String}
})

module.exports = mongoose.model('brand', userSchema)