const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    //{id: 1, name: 'Asus 1231', brand: 1, price: 10000000, amount: 100, date: '2000-01-01', image: '../images/laptop1.jpg', description: 'description'},
    id: {type : ObjectId},
    name: {type: String},
    brand: {type: Schema.Types.ObjectId, ref: 'brand'},
    price: {type: Number},
    amount: {type: String},
    date: {type: Date},
    image: {type: String},
    description: {type: String},
})

module.exports = mongoose.model('product', userSchema)