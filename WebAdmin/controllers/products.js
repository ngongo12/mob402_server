const productSer = require('../services/products');

exports.get = async () => {
    return await productSer.get();
}

exports.getById = (id) =>{
    return productSer.getById(id);
}

exports.delete = async (id) => {
    return await productSer.delete(id);
}

exports.update = async (params, body) => {
    let {id} = params;
    let {name, brand, amount, price, date, description, image} = body;
    await productSer.update({id, name, brand, amount, price, date, description, image});
}

exports.add = async (body) => {
    let {name, brand, amount, price, date, description, image} = body;
    if(!image)
    {
        image = 'images/default.png';
    }
    await productSer.add({name, brand, amount, price, date, description, image});
}