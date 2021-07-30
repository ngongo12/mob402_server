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
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchInput = props =>{
    const {placeholder} = props
    return(
        <View style={styles.container}>
            <Ionicons name="search-outline" color="gray" size={25} style={styles.icon} />
            <TextInput style={styles.input} placeholder={placeholder} />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EDE9E9',
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1
    },
    icon:{
        
    },
    input:{
        flex: 1
    }
})