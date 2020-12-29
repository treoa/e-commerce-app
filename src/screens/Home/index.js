import React from 'react';
import {View, ImageBackground, Text, Button, Pressable} from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native'

import styles from './styles'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Pressable style={styles.searchBtn} onPress = {() => navigation.navigate('Destination Search')}>
                <Fontisto name='search' size={25} color={'#f15454'} />
                <Text style={styles.searchBtnText}>
                    Where are you going?
                </Text>
            </Pressable>
            <ImageBackground source={require('./../../../assets/images/wallpaper.jpeg')} style={styles.image}>
            
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