import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Pressable,
    Modal,
    FlatList
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import Item from '../components/CartItem'
import HeaderBar from '../components/HeaderBar'
import Price from '../components/Price';

const CartScreen = props => {
    const {navigate} = props;
    const [isSelected, setIsSelected] = useState(false)
    const products = [
        {id: 1, name: 'Asus 1231', brand: 'Asus', price: 10000000, amount: 100, date: '2000-01-01', image: require('../images/laptop1.jpg'), description: 'description'},
        {id: 2, name: 'Asus 1232', brand: 'Asus', price: 12000000, amount: 100, date: '2000-01-11', image: require('../images/laptop2.jpg'), description: 'description'},
        {id: 3, name: 'Asus 1233', brand: 'Asus', price: 14000000, amount: 100, date: '2000-01-23', image: require('../images/laptop3.jpg'), description: 'description'},
        {id: 4, name: 'Asus 1234', brand: 'Asus', price: 16000000, amount: 100, date: '2000-01-21', image: require('../images/laptop4.jpg'), description: 'description'},
        {id: 5, name: 'Asus 1235', brand: 'Asus', price: 20000000, amount: 100, date: '2000-01-11', image: require('../images/laptop5.jpg'), description: 'description'},
    ]

    return (
        <View style={{flex: 1}}>
            <HeaderBar />
            <FlatList 
                data={products}
                renderItem={({item})=>
                        <Item item={item} navigate={navigate} />
                    }
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
            <View style={styles.wrap}>
                <View style={styles.checkboxView}>
                    <CheckBox
                    disabled={false}
                    value={isSelected}
                    onValueChange={(newValue) => setIsSelected(newValue)}
                    style={styles.checkbox}
                    />
                    <Text style={styles.text}>Tất cả</Text>
                </View>
                <Text style={styles.text}>Tổng tiền: </Text>
                <Price value={10000000} style={styles.price} /><Text style={[styles.text, {color:'red'}]}>đ</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Mua hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    list:{
        flex: 1
    },
    wrap:{
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 10,
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: 'grey',
    },
    checkbox:{
        margin: 10,
        marginRight: 0
    },
    checkboxView:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    text:{
        color: 'grey',
        fontSize: 12
    },
    price:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15
    },
    button:{
        width: 110,
        height: 60,
        backgroundColor: '#003A64',
        alignItems: 'center',
        justifyContent:'center',
        marginLeft: 10
    },
    buttonText:{
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold'
    }
})