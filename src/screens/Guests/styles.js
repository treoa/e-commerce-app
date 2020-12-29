import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        borderWidth: 1,
        width: 30,
        height:30,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 20,
        borderBottomWidth: 1, 
        borderColor: 'lightgrey', 
        marginHorizontal: 20, 
        paddingVertical: 20
    }
});

export default styles;