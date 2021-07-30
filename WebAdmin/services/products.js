
const productModel = require('../models/productModel');

exports.get = async function getAllStudents() {
    const products = await productModel.find();
    console.log(products);
    return products;
}

exports.getById = (id) =>{
    const product = products.filter(item => item.id.toString() == id.toString())[0] || null;
    return product;
}

exports.delete = async (id) =>{
    try{
        await productModel.deleteOne({_id: id});
        return true;
    }
    catch(e)
    {
        return false;
    }
}

exports.update = async (pd) => {

    await productModel.update(
        { _id: pd.id},
        {
            name : pd.name, brand: pd.brand, price: pd.price, amount: pd.amount, date: pd.date, description: pd.description, image: pd.image
        }
    )
}

exports.add = async (pd) => {
    const item = new productModel(pd);
    await item.save();
}