const brandModel = require('../models/brandModel')

exports.get = async () => {

    return await brandModel.find();
}

exports.add = (br) =>{
    //lấy id tự động
    let id = datas[datas.length-1].id + 1;

    datas.push({...br, id, amount: 0});
}

exports.update = (br) => {

    datas = datas.map(item => item.id == br.id ? 
        {...item, name : br.name, image: !br.image ? item.image : br.image}:
        item
    )
}