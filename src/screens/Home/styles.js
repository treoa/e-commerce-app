import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 88,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: 'white',
        width: 200,
        marginLeft: 25,
        marginTop: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntext: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchBtn: {
        backgroundColor: '#fff',
        height: 56,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        top:20,
        zIndex: 100,
    },
    searchBtnText: {
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default styles;
