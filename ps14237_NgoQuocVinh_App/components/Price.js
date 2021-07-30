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

const Price = props => {
    const {style, value} = props;
    const currencyFormat = (num) =>{
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
    return(
        <Text style={style}>{currencyFormat(value)}</Text>
    )
}

export default Price