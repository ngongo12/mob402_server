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

const Brands = props => {
    const brands = [
        {id: 1,image: require('../images/mac.png')},
        {id: 2,image: require('../images/asus.png')},
        {id: 3,image: require('../images/dell.png')},
        {id: 4,image: require('../images/lenovo.png')},
        {id: 5,image: require('../images/acer.png')},
        {id: 6,image: require('../images/hp.png')},
        {id: 7,image: require('../images/lg.png')},
        {id: 8,image: require('../images/msi.png')},
    ]

    const Item = props =>{
        const {item} = props;
        return(
            <View style={styles.wrapper}>
                <Image source={item.image} style={styles.image} />
            </View>
        )
    }

    return (
        <FlatList 
            data={brands}
            renderItem={({item})=>
                    <Item item={item} />
                }
            keyExtractor={key=>key.id}
            style={styles.list}
            horizontal={true}
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default Brands;

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        backgroundColor: 'white',
        elevation: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    wrapper: {
        width: 150,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor:'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        backgroundColor: 'white'
    },
    image: {
        width: 120,
        height: 30,
    }
})