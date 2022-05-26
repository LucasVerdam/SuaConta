import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    txt1: {
        fontSize: 20,
        paddingHorizontal: 15,
        marginTop: 50,
        fontWeight: '300',
        textAlign: 'left',
        color: themes.colors2.cinzaTxt
    },

    txt2: {
        fontSize: 15,
        paddingHorizontal: 15,
        fontWeight: '300',
        textAlign: 'left',
        color: themes.colors2.cinzaTxt
    },

    input: {
        width: 100,
        height: 50,
        borderRadius: 40,
        backgroundColor: themes.colors2.cinzaBg,
        paddingHorizontal: 15,
        marginHorizontal: 15,
    }
});