import 'react-native-gesture-handler';
import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    LogBox,
    SafeAreaView,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import ProductDetails from './screens/ProductDetail'
import FirstScreen from './screens/FirstScreen'
import CartScreen from './screens/CartScreen'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
    'Setting a timer',
    'Failed to get size for image',
    "Can't perform a React state update on an unmounted component",
]);

const RootStack = createStackNavigator();
const App = props => {
    return (
        <>
            <StatusBar translucent backgroundColor='white' barStyle='dark-content' />
            <View style={{height: StatusBar.currentHeight, backgroundColor:'transparent'}} />
            <NavigationContainer>
                <RootStack.Navigator initialRouteName="MainScreen">
                    <RootStack.Screen
                        name="MainScreen"
                        component={MainScreen}
                        options={{ headerShown: false }}
                    />
                    <RootStack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <RootStack.Screen
                        name="SignupScreen"
                        component={SignupScreen}
                        options={{ headerShown: false }}
                    />
                    <RootStack.Screen
                        name="ProductDetails"
                        component={ProductDetails}
                        options={{ headerShown: false }}
                    />
                    <RootStack.Screen
                        name="FirstScreen"
                        component={FirstScreen}
                        options={{ headerShown: false }}
                    />
                    <RootStack.Screen
                        name="CartScreen"
                        component={CartScreen}
                        options={{ headerShown: false }}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default App;