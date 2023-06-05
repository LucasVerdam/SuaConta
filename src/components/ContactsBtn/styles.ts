import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        right: 20,
        bottom: 45,
        width: 60,
        height: 60,
        paddingTop: 2,
        borderRadius: 10,
        backgroundColor: themes.colors2.pele,
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 50,
        height: 50,
    }
});