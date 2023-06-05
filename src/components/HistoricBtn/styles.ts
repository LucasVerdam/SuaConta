import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: 50,
        height: 55,
        paddingTop: 2,
        borderRadius: 10,
        backgroundColor: themes.colors2.azulesc,
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 45,
        height: 45,
    },

    txt: {
        fontSize: 10
    }
});