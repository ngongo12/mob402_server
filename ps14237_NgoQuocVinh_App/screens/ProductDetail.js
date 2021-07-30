import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight
  
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Products from '../components/Products'
import HeaderBar from '../components/HeaderBar'
import Brands from '../components/Brands'
import Price from '../components/Price'

const windowW=Dimensions.get('window').width;
const ProductDetails = () => {
    const item = {id: 1, name: 'Asus 1231', brand: 'Asus', price: 10000000, amount: 100, date: '2000-01-01', image: require('../images/laptop1.jpg'),
        description: 'Laptop Acer Nitro 5 AN515 45 R3SM R5 (NH.QBMSV.005) có vẻ ngoài hình hầm hố đặc trưng của dòng laptop gaming, cấu hình mạnh mẽ chạy mượt các tựa game được các game thủ ưa thích với con chip AMD Ryzen 5 và card đồ họa NVIDIA GeForce GTX 1650 4GB.'
        +'Bộ xử lí mạnh mẽ, dành riêng để chiến game'
        +'Chiếc laptop Acer này được trang bị con chip AMD Ryzen 5 5600H cho hiệu năng mượt mà chạy tốt các ứng dụng đồ họa đến các tựa game cấu hình cao với với 6 lõi 12 luồng, xung nhịp trung bình là 3.30 GHz và đạt tối đa lên đến 4.2 GHz nhờ Turbo Boost.'
        
        +'RAM 8 GB DDR4 (2 khe) cho khả năng đa nhiệm mượt mà, bạn có thể mở cùng lúc nhiều tab Chrome, ứng dụng mà không lo máy bị giật, lag với tốc độ Bus RAM 3200 MHz. Hỗ trợ khe RAM tối đa lên đến 32 GB thuận tiện hơn cho việc nâng cấp khi nhu cầu sử dụng cao.'}
    return (
        <View style={{flex: 1}}>
            <HeaderBar/>
            <ScrollView style={styles.container}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.nameWrap}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={{color:'red'}}><Price value={item.price} style={styles.price} />đ</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                        <View style={styles.rate}>
                            <AntDesign name="star" color="gold" size={20} />
                            <AntDesign name="star" color="gold" size={20} />
                            <AntDesign name="star" color="gold" size={20} />
                            <AntDesign name="star" color="gold" size={20} />
                            <AntDesign name="star" color="gold" size={20} />
                            <Text style={{marginLeft: 5, fontSize: 15}}>5</Text>
                            
                        </View>
                        <Text style={styles.kho}>Tồn kho: {item.amount}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <AntDesign name="hearto" color="grey" size={26} style={{marginRight: 12}} />
                            <AntDesign name="sharealt" color="grey" size={26} style={{marginRight: 12}} />
                        </View>
                    </View>
                </View>
                <View style={styles.descriptionWrap}>
                    <Text style={{fontSize:18, fontWeight: 'bold'}}>Mô tả</Text>
                    <Text>{item.description}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonGroup}>
                <TouchableHighlight style={[styles.button, {backgroundColor: '#19AFA3'}]}>
                    <View style={{alignItems: 'center'}}>
                        <AntDesign name="shoppingcart" color="white" size={28} />
                        <Text style={{color: 'white'}}>Thêm vào giỏ hàng</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={{color: 'white', fontSize: 20}}>Mua ngay</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default ProductDetails;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    image:{
        width: windowW,
        height: windowW*0.8
    },
    price:{
        fontSize: 22,
        color: 'red'
    },
    nameWrap:{
        backgroundColor: 'white',
        padding: 10
    },
    name:{
        fontSize: 20,
    },
    rate:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    kho:{
        borderLeftWidth: 1,
        borderColor: 'grey',
        flex: 1,
        paddingLeft: 20
    },
    descriptionWrap:{
        marginTop: 10,
        padding: 10,
        backgroundColor: "white"
    },
    buttonGroup:{
        flexDirection:'row',
        top: 0
    },
    button:{
        flex: 1,
        height: 60,
        backgroundColor: '#003A64',
        alignItems: 'center',
        justifyContent:'center',
    }
})