import React from 'react';
import {View, Text, Image} from 'react-native'
import styles from './styles'

const Post = (props) => {
    console.log(props)
    data_my = props.post

    return(
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{uri: data_my.image}}/>
            {/* Bed and Bedroom */}
            <Text style={styles.bedrooms}>
                {data_my.bed} bed and {data_my.bedroom} bedroom
            </Text>
            {/* Type and Desc. */}
            <Text style={styles.decription} numberOfLines={2}>
                {data_my.type}. {data_my.title}
            </Text>
            {/* Old price and the new Price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>
                    ${data_my.oldPrice}
                </Text>
                <Text style={styles.newPrice}>   ${data_my.newPrice} / night </Text>
            </Text>
            {/* Total price */}
            <Text style={styles.totalPrice}>
                ${data_my.totalPrice} total
            </Text>
        </View>
    )
};

export default Post;