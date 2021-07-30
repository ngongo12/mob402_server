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
    Modal
} from 'react-native';

const windowW=Dimensions.get('window').width;
const ScaleImage = props => {
    const {image} = props;
    console.log(image);
    const [scaleH, setScaleH] = useState(windowW)
    return(
        <Image source = {image} style={[styles.image]} />
    )
}

export default ScaleImage;
const styles = StyleSheet.create({
    image: {
        width: windowW*0.45,
        height: windowW*0.4,
        marginBottom: 10,
        resizeMode: 'cover'
    }
})