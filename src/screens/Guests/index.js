import React, {useState} from 'react';
import {View, ImageBackground, Text, Button, Pressable} from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import styles from './styles'

const GuestSelect = (props) => {

    const [AdultNum, setAdultNum] = useState(1)
    const [ChildNum, setChildNum] = useState(0)
    const [InfantNum, setInfantNum] = useState(0)

    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold', }}>Adults</Text>
                    <Text style={{color: '#8d8d8d', }}>Ages 15 and above</Text>
                </View>
            
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                        onPress={() => setAdultNum(Math.max(0, AdultNum - 1))}
                        style={styles.button}  
                    >
                        <Text style = {{fontSize: 20, color: '#474747'}}>-</Text>
                    </Pressable>
                    <Text style = {{marginHorizontal: 20, fontSize: 16}}>{AdultNum}</Text>
                    <Pressable 
                        onPress={() => setAdultNum(AdultNum + 1)}
                        style={styles.button}
                    >
                        <Text style = {{fontSize: 20, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold', }}>Children</Text>
                    <Text style={{color: '#8d8d8d', }}>Ages 1-14</Text>
                </View>
            
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                        onPress={() => setChildNum(Math.max(0, ChildNum - 1))}
                        style={styles.button}  
                    >
                        <Text style = {{fontSize: 20, color: '#474747'}}>-</Text>
                    </Pressable>
                    <Text style = {{marginHorizontal: 20, fontSize: 16}}>{ChildNum}</Text>
                    <Pressable 
                        onPress={() => setChildNum(ChildNum + 1)}
                        style={styles.button}
                    >
                        <Text style = {{fontSize: 20, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold', }}>Infants</Text>
                    <Text style={{color: '#8d8d8d', }}>Ages below 1</Text>
                </View>
            
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                        onPress={() => setInfantNum(Math.max(0, InfantNum - 1))}
                        style={styles.button}
                    >
                        <Text style = {{fontSize: 20, color: '#474747'}}>-</Text>
                    </Pressable>
                    <Text style = {{marginHorizontal: 20, fontSize: 16}}>{InfantNum}</Text>
                    <Pressable 
                        onPress={() => setInfantNum(InfantNum + 1)}
                        style={styles.button}
                    >
                        <Text style = {{fontSize: 20, color: '#474747'}}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default GuestSelect;