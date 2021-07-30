import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
    TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Price from './Price';


const windowW=Dimensions.get('window').width;
const Item = props => {
    const {item, navigate} = props;
    const [isSelected, setIsSelected] = useState(false)
    const [numOfBuy, setNumOfBuy] = useState(1)
    return (
        <Pressable style={styles.container}>
            <CheckBox
                disabled={false}
                value={isSelected}
                onValueChange={(newValue) => setIsSelected(newValue)}
                style={styles.checkbox}
            />
            <Image source={item.image} style={styles.image} />
            <View style={styles.detailWrap}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.priceView}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Price style={styles.price} value={item.price}/><Text style={{color:'red'}}>đ</Text>
                    </View>
                    <Text>Kho {item.amount}</Text>
                    <View style={styles.numWrap}>
                        <Text style={styles.smallButton}>-</Text>
                        <TextInput
                            value={numOfBuy+""}
                            onChangeText={setNumOfBuy}
                            style={styles.input}
                        />
                        <Text style={styles.smallButton}>+</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default Item;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'row',
        shadowColor: "#000",
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
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
    detailWrap:{
        flexDirection:'column',
        flex: 1,
    },
    image: {
        width: windowW*0.3,
        height: windowW*0.27,
        marginBottom: 10,
        resizeMode: 'cover',
        margin: 10,
        marginLeft: 0
    },
    priceView:{
        flexDirection: 'column',
        padding: 10,
        paddingTop: 0
    },
    amount:{
        fontSize: 11
    },
    checkbox:{
        margin: 10
    },
    numWrap:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    smallButton:{
        width: 30,
        height: 32,
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 0.5,
        borderColor: 'grey'
    },
    input:{
        textAlign: 'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        padding: 0,
        height: 32,
        width: 50
    }
})