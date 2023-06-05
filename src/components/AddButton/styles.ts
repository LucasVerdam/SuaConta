import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    addBtn: {
        height: 36,
        width: 36,
        borderRadius: 18,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
        backgroundColor: themes.colors2.azulesc
    },

    img: {
        height: 25,
        width: 25,
        tintColor: '#fff'
    }

});