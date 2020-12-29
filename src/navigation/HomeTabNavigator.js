import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import Home from './../screens/Home'
import {View, ImageBackground, Text, Button, Pressable} from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HomeScreen from './../screens/Home';

const tab = createBottomTabNavigator();

const HometabNavigator = (props) => {
    return (
        <tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454'
        }}>
            <tab.Screen 
                name = {"Explore"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name='search' size={25} color={color}/>
                    )
                }}
            />

            <tab.Screen 
                name = {"Saved"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name='heart-o' size={25} color={color}/>
                    )
                }}
            />

            <tab.Screen 
                name = {"Airbnb"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name='airbnb' size={25} color={color}/>
                    )
                }}
            />

            <tab.Screen 
                name = {"Messages"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name='message-square' size={25} color={color}/>
                    )
                }}
            />

            <tab.Screen 
                name = {"Profile"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <EvilIcons name='user' size={25} color={color}/>
                    )
                }}
            />
        </tab.Navigator>
    );
};

export default HometabNavigator