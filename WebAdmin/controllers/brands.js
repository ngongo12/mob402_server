const brandSer = require('../services/brands');

exports.get = async () => {
    return await brandSer.get();
}

exports.add = async (body) =>{
    let {name, image} = body;
    await brandSer.add({name, image});
}

exports.update = async (params, body) => {
    let {id} = params;
    let {name, image} = body;
    await brandSer.update({id, name, image});
}