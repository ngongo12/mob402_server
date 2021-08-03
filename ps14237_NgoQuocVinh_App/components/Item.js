import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Price from './Price';
import ProductDetails from '../screens/ProductDetail';


const windowW=Dimensions.get('window').width;
const Item = props => {
    const {item, navigate} = props;
    return (
        <Pressable style={styles.container} onPress={()=>navigate('ProductDetails', {id: item._id})}>
            <Image source={{uri:item.image}} style={styles.image} />
            <View style={styles.heart}>
                <Ionicons name="heart" color="white" size={22} />
            </View>
            
            <Text style={styles.name} numberOfLines={2} ellipsizeMode='tail'>{item.name}</Text>
            <View style={styles.priceView}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <Price style={styles.price} value={item.price}/><Text style={{color:'red'}}>đ</Text>
                </View>
                <Text>Kho {item.amount}</Text>
            </View>
        </Pressable>
    )
}

export default Item;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginLeft: windowW*0.01,
        marginRight:  windowW*0.01,
        marginTop:  windowW*0.02,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flex: 1
    },
    name:{
        fontSize: 18,
        color: '#362F4C',
        padding: 10
    },
    price:{
        color: 'red',
        fontSize: 15
    },
    numberOfRate:{
        color: 'grey',
        fontSize: 18
    },
    heart:{
        position: 'absolute',
        backgroundColor: 'red',
        width: 35,
        height: 35,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        top: 5,
        right: 5
    },
    image: {
        width: windowW*0.48,
        height: windowW*0.4,
        marginBottom: 10,
        resizeMode: 'cover',
        borderWidth: 3,
        borderBottomWidth: 0,
        borderColor: 'grey'
    },
    priceView:{
        flexDirection: 'row',
        padding: 10,
        paddingTop: 0
    },
    amount:{
        fontSize: 11
    }
})