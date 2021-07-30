import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    LogBox,
  
} from 'react-native';

import Products from '../components/Products'
import HeaderBar from '../components/HeaderBar'
import Brands from '../components/Brands'

const HomeScreen = props => {
    const {navigation: {navigate}} = props;
    return (
        <View style={{flex: 1}}>
            <HeaderBar navigate={navigate}/>
            <Products navigate={navigate} />
        </View>
    )
}

export default HomeScreen;