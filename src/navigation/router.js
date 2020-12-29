import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import DestSearch from "../screens/DestSearch"
import 'react-native-gesture-handler'
import GuestSelect from '../screens/Guests';
import HometabNavigator from './HomeTabNavigator'


const stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name = {"Home"}
                    component={HometabNavigator}
                    options={{
                        headerShown: false
                    }}
                />

                <stack.Screen
                    name = {"Guests"}
                    component={GuestSelect}
                    options={{
                        title:"The number of people",
                    }}
                />

                <stack.Screen
                    name = {"Destination Search"}
                    component={DestSearch}
                    options={{
                        title: "Search your destination"
                    }}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;