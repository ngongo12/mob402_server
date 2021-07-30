const productSer = require('../services/products');

exports.get = () => {
    return productSer.get();
}

exports.getById = (id) =>{
    return productSer.getById(id);
}

exports.delete = (id) => {
    productSer.delete(id);
}

exports.update = (params, body) => {
    let {id} = params;
    let {name, brand, amount, price, date, description, image} = body;
    console.log(body);
    productSer.update({id, name, brand, amount, price, date, description, image});
}

exports.add = (body) => {
    let {name, brand, amount, price, date, description, image} = body;
    if(!image)
    {
        image = 'images/default.png';
    }
    productSer.add({name, brand, amount, price, date, description, image});
}