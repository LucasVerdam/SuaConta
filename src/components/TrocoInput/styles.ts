import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        marginBottom: 10,
        marginHorizontal: 15,
        justifyContent: 'space-between',
    },

    names: {
        minWidth: 220,
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: themes.colors2.cinzaTxt,
        backgroundColor: themes.colors2.pelecla,
    },

    input: {
        width: 100,
        height: 50,
        borderRadius: 40,
        backgroundColor: themes.colors2.cinzaBg,
        paddingHorizontal: 15,
    }
});