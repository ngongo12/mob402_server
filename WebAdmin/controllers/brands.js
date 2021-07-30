const brandSer = require('../services/brands');

exports.get = async () => {
    return await brandSer.get();
}

exports.add = (body) =>{
    let {name, image} = body;
    brandSer.add({name, image});
}

exports.update = (params, body) => {
    let {id} = params;
    let {name, image} = body;
    brandSer.update({id, name, image});
}