import React, {useState} from 'react';
import {View, ImageBackground, Text, Button, Pressable, FlatList, TextInput} from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import styles from './styles'
import searchRes from './../../../assets/data/search'

const DestSearch = (props) => {

    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container}>
            {/* Input component */}
            <TextInput 
                style={styles.inputText}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
            <FlatList
                data={searchRes}
                renderItem={({item}) => (
                    <View style={styles.searchResult}>
                        <View style={styles.iconContainer}>
                            <Entype name={'location-pin'} size = {30}/>
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default DestSearch;