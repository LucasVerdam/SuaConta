import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    names: {
        height: 30,
        minWidth: 70,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        color: themes.colors2.cinzaTxt,
        backgroundColor: themes.colors2.pelecla,
        justifyContent: 'center',
        alignItems: 'center'
    },

    pressNames: {
        height: 30,
        minWidth: 70,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        color: themes.colors2.cinzaTxt,
        backgroundColor: themes.colors2.cinzaBg,
        justifyContent: 'center',
        alignItems: 'center'
    },

    listItem: {
        fontSize: 14,
        color: themes.colors2.cinzaTxt
    },
});