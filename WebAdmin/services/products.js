
var products = [
    {id: 1, name: 'Asus 1231', brand: 1, price: 10000000, amount: 100, date: '2000-01-01', image: '../images/laptop1.jpg', description: 'description'},
    {id: 2, name: 'Asus 1232', brand: 3, price: 12000000, amount: 100, date: '2000-01-11', image: '../images/laptop2.jpg', description: 'description'},
    {id: 3, name: 'Asus 1233', brand: 2, price: 14000000, amount: 100, date: '2000-01-23', image: '../images/laptop3.jpg', description: 'description'},
    {id: 4, name: 'Asus 1234', brand: 5, price: 16000000, amount: 100, date: '2000-01-21', image: '../images/laptop4.jpg', description: 'description'},
    {id: 5, name: 'Asus 1235', brand: 2, price: 20000000, amount: 100, date: '2000-01-11', image: '../images/laptop5.jpg', description: 'description'},
]

exports.get = function getAllStudents() {
    
    return products;
}

exports.getById = (id) =>{
    const product = products.filter(item => item.id == id)[0] || null;
    return product;
}

exports.delete = (id) =>{
    products = products.filter(pd => pd.id != id); 
}

exports.update = (pd) => {

    products = products.map(item => item.id == pd.id ? 
        {...item, name : pd.name, brand: pd.brand, price: pd.price, amount: pd.amount, date: pd.date, description: pd.description, image: pd.image.trim()=="" ? item.image : pd.image}:
        item
    )
    console.log(products)
}

exports.add = (pd) => {

    //lấy id tự động
    let id = products[products.length-1].id + 1;

    products.push({...pd, id});
}