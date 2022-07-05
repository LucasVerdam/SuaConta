import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';


export const styles = StyleSheet.create({

    next: {
        width: 100,
        height: themes.heigth.headerHeigth,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors2.azulcla
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