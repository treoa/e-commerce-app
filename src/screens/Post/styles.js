import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
        shadowOffset: {width: 15, height: 15},
        shadowColor: 'black',
        shadowOpacity: 50
    },
    bedrooms:{
        marginVertical: 10,
        color: 'darkgray'
    },
    decription: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
        color: 'black'
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontWeight: 'bold',
        color: 'black',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    },
})

export default styles;