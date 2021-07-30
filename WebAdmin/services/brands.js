var datas = [
    { id: 1, name:"MacBook" ,image: '/images/mac.png', amount: 120 },
    { id: 2, name:"Asus" ,image: '/images/asus.png' , amount: 150 },
    { id: 3, name:"Dell" ,image: '/images/dell.png' , amount: 200 },
    { id: 4, name:"Lenovo" ,image: '/images/lenovo.png', amount: 1000  },
    { id: 5, name:"Acer" ,image: '/images/acer.png' , amount: 133 },
    { id: 6, name:"HP" ,image: '/images/hp.png' , amount: 144 },
    { id: 7, name:"LG" ,image: '/images/lg.png' , amount: 155 },
    { id: 8, name:"MSI" ,image: '/images/msi.png' , amount: 166 },
]

exports.get = () => {

    return datas;
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