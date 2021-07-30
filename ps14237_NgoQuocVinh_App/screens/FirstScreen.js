import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { useState, useEffect } from 'react';

const FirstScreen = (props) => {
    const {navigation : {navigate}} = props;
    return(
        <>
            <StatusBar backgroundColor='transparent' />
            <ImageBackground 
                style={styles.container}
                source = {require('../images/bg.jpeg')}
                >
                <View style={styles.wrap}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>Teck Shop</Text>
                    </View>
                    <View style={styles.main}>
                    </View>
                </View>
                <View style={styles.buttonArea}>
                    <Text style={styles.title}>
                        Shopping now, everywhere!
                    </Text>
                    <TouchableOpacity onPress={() => navigate('LoginScreen')}>
                        <Text style={styles.button}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.textSignup} onPress={() => navigate('SignUpScreen')}>-Or Create Account-</Text>
                </View>
                </View>
            </ImageBackground>
        </>
    )
}

export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
        flex: 1
    },

    header: {
        flex: 8,
    },
    logo: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 30
    },
    logoText: {
        fontSize: 16,
        color: '#362F4C',
        fontFamily:'SVN-Harabaras'
    },
    main: {
        flex: 4,
        justifyContent: 'center',
        padding: 30
    },
    mainText: {
        fontFamily:'SVN-Harabaras',
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
    },

    buttonArea: {
        flex: 3,
        flexDirection: 'column',
        padding: 35,
        borderTopRightRadius: 35,
        backgroundColor: '#E5E1DE',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 17,
    },
    button: {
        backgroundColor: "#272F32",
        lineHeight: 50,
        borderRadius: 10,
        textAlign: 'center',
        color: '#E5E1DE',
        fontSize: 16
    },
    textSignup: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})