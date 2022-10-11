import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({

    popBtn: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
        backgroundColor: themes.colors2.azulesc
    },

    txt: {
        position: 'absolute',
        top: 2,
        fontSize: 25,
        fontWeight: '900',
        color: "#fff",
    }
});