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
    const [brands, setBrands] = useState();

    useEffect(()=>{
        fetch('http://192.168.1.4:3000/api/brands')
            .then((res)=> res.json())
            .then((data) => setBrands(data.brands))
            .catch((e) => console.log('Lỗi lấy danh sách ',e))
    }, [])

    console.log(brands)

    const Item = props =>{
        const {item} = props;
        return(
            <View style={styles.wrapper}>
                <Image source={{uri:'http://192.168.1.4:3000/'+item.image}} style={styles.image} />
            </View>
        )
    }

    if(!brands)
    {
        return(<View />)
    }

    return (
        <FlatList 
            data={brands}
            renderItem={({item})=>
                    <Item item={item} />
                }
            keyExtractor={item=>item._id}
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
        resizeMode: 'cover'
    }
})