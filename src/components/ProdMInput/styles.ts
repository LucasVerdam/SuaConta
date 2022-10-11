import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: themes.colors2.pelecla,
    },

    txt: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    inputNome: {
        width: 150,
        height: 40,
        borderRadius: 4,
        marginHorizontal: 15,
        paddingHorizontal: 15,
        backgroundColor: themes.colors2.cinzaBg,
    },

    inputValor: {
        width: 100,
        height: 45,
        borderRadius: 40,
        marginHorizontal: 15,
        paddingHorizontal: 15,
        backgroundColor: themes.colors2.cinzaBg,
    },

    cardNames: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },

    btnContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center'
    },
});