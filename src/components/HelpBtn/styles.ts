import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 25,
        bottom: 25,
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 0.5,
        borderColor: themes.colors2.preto,
        backgroundColor: themes.colors2.azulesc
    },

    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    }
});