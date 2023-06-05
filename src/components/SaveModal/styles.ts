import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({

    modalBg: {
        flex: 1,
        opacity: 0.7,
        backgroundColor: '#000'
    },

    container: {
        height: 350,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -20,
        backgroundColor: '#dbdbdb',
    },

    title: {
        alignItems: 'center'
    },

    txt1: {
        fontSize: 35,
        marginTop: 10,
        fontWeight: '500'
    },

    txt2Box: {
        alignItems: 'center',
        margin: 15
    },

    txt2: {
        fontSize: 18,
        textAlign: 'center'
    },

    btns: {
        flexDirection: 'row',
        height: 100,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
    }

});