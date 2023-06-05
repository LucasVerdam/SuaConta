import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 25,
        bottom: 25,
        width: 36,
        height: 36,
        borderRadius: 18,
        opacity: 0.9,
        backgroundColor: themes.colors2.azulesc
    },

    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 23
    }
});