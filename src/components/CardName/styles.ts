import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    names: {
        minWidth: 70,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 25,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        color: themes.colors2.cinzaTxt,
        backgroundColor: themes.colors2.pelecla,
        justifyContent: 'center',
        alignItems: 'center'
    },

    pressedN: {
        minWidth: 70,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 25,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        color: themes.colors2.cinzaTxt,
        backgroundColor: themes.colors2.cinzaBg,
        justifyContent: 'center',
        alignItems: 'center'
    },

    listItem: {
        fontSize: 18,
        color: themes.colors2.cinzaTxt
    },
});