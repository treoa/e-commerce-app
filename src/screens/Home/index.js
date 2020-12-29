import React from 'react';
import {View, ImageBackground, Text, Button, Pressable} from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import styles from './styles'

const HomeScreen = () => {
    return (
        <View>
            <ImageBackground source={require('./../../../assets/images/wallpaper.jpeg')} style={styles.image}>
            <Pressable style={styles.searchBtn} onPress = {() => console.warn("Search Btn was clicked")}>
                    <Fontisto name='search' size={25} color={'#f15454'} />
                    <Text style={styles.searchBtnText}>
                        Where are you going?
                    </Text>
            </Pressable>
                <Text style={styles.title}>
                    GO NEAR
                </Text>
                <Pressable style={styles.button}
                onPress = {() => console.warn("Explore Btn was clicked")}>
                    <Text style={styles.btntext}>
                        Explore nearby stays
                    </Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen;