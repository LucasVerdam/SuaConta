import { StyleSheet } from 'react-native';
import { themes } from '../../../global/styles/themes';

export const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 40,
        marginTop: 10,
        textAlign: 'center',
        color: themes.colors2.preto,
    },

    container: {
        flex: 1,
        margin: 10,
        borderRadius: 8,
        borderWidth: 0.5,
        justifyContent: 'space-between',
        backgroundColor: themes.colors2.pelecla
    },


});