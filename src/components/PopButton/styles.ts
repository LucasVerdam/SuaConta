import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({

    popBtn: {
        height: 36,
        width: 36,
        borderRadius: 18,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
        backgroundColor: themes.colors2.azulesc
    },

    txt: {
        position: 'absolute',
        fontSize: 25,
        fontWeight: '900',
        color: "#fff",
    }
});