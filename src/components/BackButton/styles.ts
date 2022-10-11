import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';


export const styles = StyleSheet.create({

    back: {
        width: 100,
        height: themes.heigth.headerHeigth,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors2.pele
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