import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';


export const styles = StyleSheet.create({
    header: {
        height: themes.heigth.headerHeigth,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: themes.colors2.azulcla,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: themes.heigth.headerHeigth,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: themes.colors2.azulcla,
    },
});
