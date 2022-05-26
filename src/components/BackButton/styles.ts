import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';


export const styles = StyleSheet.create({

    fechar: {
        width: 100,
        height: themes.heigth.headerHeigth,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors2.laranja
    },

    txtBtn: {
        fontSize: 18,
        fontWeight: '600'
    },

    img: {
        height: 40,
        width: 40,
    }
});