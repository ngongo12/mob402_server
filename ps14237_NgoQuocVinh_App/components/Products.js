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
import Item from './Item'
import Brands from './Brands'

const Products = props => {
    const {navigate} = props;
    const products = [
        {id: 1, name: 'Asus 1231', brand: 'Asus', price: 10000000, amount: 100, date: '2000-01-01', image: require('../images/laptop1.jpg'), description: 'description'},
        {id: 2, name: 'Asus 1232', brand: 'Asus', price: 12000000, amount: 100, date: '2000-01-11', image: require('../images/laptop2.jpg'), description: 'description'},
        {id: 3, name: 'Asus 1233', brand: 'Asus', price: 14000000, amount: 100, date: '2000-01-23', image: require('../images/laptop3.jpg'), description: 'description'},
        {id: 4, name: 'Asus 1234', brand: 'Asus', price: 16000000, amount: 100, date: '2000-01-21', image: require('../images/laptop4.jpg'), description: 'description'},
        {id: 5, name: 'Asus 1235', brand: 'Asus', price: 20000000, amount: 100, date: '2000-01-11', image: require('../images/laptop5.jpg'), description: 'description'},
    ]

    return (
        <FlatList 
            data={products}
            renderItem={({item})=>
                    <Item item={item} navigate={navigate} />
                }
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            style={styles.list}
            ListHeaderComponent={Brands}
        />
    )
}

export default Products;

const styles = StyleSheet.create({
})