import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({

    txt1: {
        fontSize: 20,
        paddingHorizontal: 15,
        marginTop: 50,
        fontWeight: '300',
        textAlign: 'left',
        color: '#252A36'
    },

    counter: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 100,
        height: 50,
        borderRadius: 40,
        backgroundColor: themes.colors2.pele,
        paddingHorizontal: 15,
        marginHorizontal: 15
    },

    mais: {
        height: 36,
        width: 36,
        borderRadius: 18,
        marginRight: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes.colors2.azulesc
    },

    menos: {
        height: 36,
        width: 36,
        borderRadius: 18,
        marginHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes.colors2.azulesc
    },

});