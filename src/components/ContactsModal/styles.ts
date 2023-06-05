import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({

    container: {
        flex: 4,
        width: '100%',
        position: 'relative',
        bottom: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -20,
        alignItems: 'center',
        backgroundColor: '#dbdbdb',
    },

    modalBg: {
        flex: 3,
        opacity: 0.7,
        backgroundColor: '#000'
    },

    title: {
        alignItems: 'center'
    },

    txt1: {
        fontSize: 35,
        marginTop: 10,
        fontWeight: '500'
    },

    /* scroll: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#fff',
    }, */

    contactBox: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        /* marginLeft: '20%', */
        /*         backgroundColor: '#fff' */
    },

    contact: {
        height: 45,
        width: 150,
        marginVertical: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#3f3f3f',
        backgroundColor: themes.colors2.preto,
    }
});