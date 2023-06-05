import { StyleSheet } from 'react-native';
import { themes } from '../../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        borderRadius: 8,
        borderWidth: 0.5,
        justifyContent: 'space-between',
        backgroundColor: themes.colors2.pelecla
    },

    valores: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 10
    },
    textValorP: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: '500'
    },
    valorP: {
        fontSize: 14
    },
    totais: {
        justifyContent: 'flex-end'
    },
    trocoTotal: {
        fontSize: 14
    },
    total: {
        fontSize: 20,
        fontWeight: '500'
    }
});