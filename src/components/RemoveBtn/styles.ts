import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    btn: {
        width: 100,
        height: themes.heigth.headerHeigth,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors2.vermelho
    },

    txtBtn: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff'
    },

    img: {
        height: 40,
        width: 40,
    }
});