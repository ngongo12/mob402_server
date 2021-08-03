import React, { useEffect, useState } from 'react';
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
    FlatList,
    ActivityIndicator
} from 'react-native';
import Item from './Item'
import Brands from './Brands'

const Products = props => {
    const { navigate } = props;
    const [products, setProducts] = useState();

    useEffect(()=>{
        fetch('http://192.168.1.4:3000/api/products')
            .then((res)=> res.json())
            .then((data) => setProducts(data.products))
            .catch((e) => console.log('Lỗi lấy danh sách ',e))
    }, [])

    if (!products) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text style={styles.text}>
                    Đang lấy thông tin sản phẩm xin chờ
                </Text>
            </View>
        )
    }
    if (products.length == 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Không có sản phẩm nào
                </Text>
            </View>
        )
    }

    return (
        <FlatList
            data={products}
            renderItem={({ item }) =>
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
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        fontSize: 18
    }
})