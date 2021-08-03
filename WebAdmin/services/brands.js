const brandModel = require('../models/brandModel')

exports.get = async () => {

    return await brandModel.find();
}

exports.add = async (br) =>{
    
    const item = new brandModel(br);
    console.log(item)
    await item.save();
}

exports.update = async (br) => {
    await brandModel.updateOne(
        { _id: br.id},
        {
            name : br.name, image: br.image
        }
    )
}