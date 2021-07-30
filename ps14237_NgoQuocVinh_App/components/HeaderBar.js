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
import SearchInput from './SearchInput';
import Ionicons from 'react-native-vector-icons/Ionicons'

const HeaderBar = props =>{
    const {navigate} = props
    return(
        <View style={styles.container}>
            <SearchInput placeholder="Hãy nhập tên sản phẩm" />
            <TouchableOpacity style={styles.iconWrapper} onPress={()=>navigate("CartScreen")} >
                <Ionicons name="ios-cart-outline" color="#362F4C" size={30} style={styles.icon} />
                <Text style={styles.num}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
                <Ionicons name="chatbox-ellipses-outline" color="#362F4C" size={30} style={styles.icon} />
                <Text style={styles.num}>5</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    iconWrapper:{
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    num:{
        position: 'absolute',
        color: 'white',
        fontSize: 10,
        paddingLeft: 5,
        paddingRight: 5,

        backgroundColor:"#362F4C",
        borderRadius: 12,
        bottom: 7,
        right: 7
    }
})