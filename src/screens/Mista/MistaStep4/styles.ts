import { StyleSheet } from 'react-native';
import { themes } from '../../../global/styles/themes'

export const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 40,
        marginTop: 15,
        textAlign: 'center',
        color: themes.colors2.preto,
    },

    txt: {
        fontSize: 20,
        marginTop: 50,
        paddingHorizontal: 15,
        fontWeight: '300',
        textAlign: 'left',
        color: themes.colors2.cinzaTxt
    },

    subTxt: {
        fontSize: 15,
        marginVertical: 2,
        paddingHorizontal: 15,
        fontWeight: '300',
        textAlign: 'left',
        color: themes.colors2.cinzaTxt
    },

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
});