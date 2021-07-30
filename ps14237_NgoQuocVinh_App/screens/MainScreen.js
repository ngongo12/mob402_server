import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
  
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';


const Tab = createMaterialBottomTabNavigator();
const MainScreen = () => {
    return (
        <>
        <StatusBar translucent backgroundColor='white' barStyle='dark-content' />
        <Tab.Navigator
            initialRouteName="HomeScreen"
            activeColor="#362F4C"
            inactiveColor="#003A64"
            barStyle={{
                backgroundColor: "white"
            }}
        >
            <Tab.Screen name="HomeScreen"
                component={HomeScreen} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        focused ?
                        (<Ionicons name="home" color={color} size={25} />)
                        :
                        (<Ionicons name="home-outline" color={color} size={25} />)
                    ),
                }}
            />
            <Tab.Screen name="NotificationScreen"
                component={NotificationScreen} 
                options={{
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ focused, color }) => (
                        focused ?
                        (<Ionicons name="notifications" color={color} size={25} />)
                        :
                        (<Ionicons name="notifications-outline" color={color} size={25} />)
                    ),
                }}
            />
            <Tab.Screen name="ProfileScreen"
                component={ProfileScreen} 
                options={{
                    tabBarLabel: 'Tôi',
                    tabBarIcon: ({ focused, color }) => (
                        focused ?
                        (<Ionicons name="person" color={color} size={25} />)
                        :
                        (<Ionicons name="person-outline" color={color} size={25} />)
                    ),
                }}
            />
        </Tab.Navigator>
        </>
    )
}

export default MainScreen;