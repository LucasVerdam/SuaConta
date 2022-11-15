import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 15,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: themes.colors2.pelecla,
    },

    popBtn: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -10,
        top: -10,
        backgroundColor: '#f45',
    },

    nomeP: {
        fontSize: 15
    },

    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    cardNames: {
        height: 30,
        minWidth: 70,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginBottom: 5,
        borderRadius: 10,
        borderWidth: 1,
        color: themes.colors2.cinzaTxt,
        backgroundColor: themes.colors2.pelecla,
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        marginTop: 4,
        height: 15,
        width: 15
    }
});