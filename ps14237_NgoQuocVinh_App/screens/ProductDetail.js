import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight,
    ActivityIndicator
  
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Products from '../components/Products'
import HeaderBar from '../components/HeaderBar'
import Brands from '../components/Brands'
import Price from '../components/Price'
import { useState, useEffect } from 'react/cjs/react.development';

const windowW=Dimensions.get('window').width;
const ProductDetails = (props) => {
    const {navigation, route:{params:{id}}} = props

    console.log(id)
    const [item, setItem] = useState()

    useEffect(()=>{
        fetch('http://192.168.1.4:3000/api/products/'+id)
            .then((res)=> res.json())
            .then((data) => setItem(data.product))
            .catch((e) => console.log('Lỗi lấy danh sách ',e))
    }, [])

    console.log(item)

    if (!item) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={styles.text}>
                    Đang lấy thông tin sản phẩm xin chờ
                </Text>
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <HeaderBar/>
            <ScrollView style={styles.containerScrollview}>
                <Image source={{uri:item.image}} style={styles.image} />
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
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        fontSize: 18
    },
    containerScrollview:{
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