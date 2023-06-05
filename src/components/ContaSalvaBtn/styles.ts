import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    conta: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '70%',
        height: 75,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: themes.colors2.pelecla,
        backgroundColor: themes.colors2.azulcla
    },

    contaName: {
        fontSize: 20,
        color: '#000'
    },

    contaDate: {
        fontSize: 15,
        color: '#000'
    }
});