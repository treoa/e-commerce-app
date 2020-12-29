import React from 'react';
import {View, Text, Image} from 'react-native'
import styles from './styles'

const Post = (props) => {
    return(
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}/>
            {/* Bed and Bedroom */}
            <Text style={styles.bedrooms}>
                1 bed and 1 bedroom
            </Text>
            {/* Type and Desc. */}
            <Text style={styles.decription} numberOfLines={2}>
                Lorem ipsum
            </Text>
            {/* Old price and the new Price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>
                    $86
                </Text>
                <Text style={styles.newPrice}>     $76 / night </Text>
            </Text>
            {/* Total price */}
            <Text style={styles.totalPrice}>
                $230 total
            </Text>
        </View>
    )
};

export default Post;