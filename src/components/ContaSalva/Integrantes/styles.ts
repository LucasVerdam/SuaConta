import { StyleSheet, Dimensions } from 'react-native';
import { themes } from '../../../global/styles/themes';

const Larg = Dimensions.get('window').width * 0.8

export const styles = StyleSheet.create({
    integrantes: {
        flex: 1,
        width: Larg,
        margin: 10,
        paddingBottom: 10,
        borderRadius: 8,
        backgroundColor: themes.colors2.preto
    },

    txt1: {
        fontWeight: '400',
        fontSize: 18,
        marginTop: 5,
        marginLeft: 10,
        color: '#fff'
    },

    conta: {
        flexDirection: 'row',
        height: 80,
        margin: 5,
        padding: 5,
        borderRadius: 4,
        justifyContent: 'space-between',
        backgroundColor: themes.colors2.azulcla
    },

    nome: {
        width: '40%',
        paddingRight: 10,
        borderRightWidth: 0.5,
        justifyContent: 'center',
    },

    valores: {
        width: 150,
        borderWidth: 0.5,
        paddingHorizontal: 5,
        justifyContent: 'center'
    },

    valor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    msg: {
        fontSize: 11,
        marginTop: 2
    },

    val: {
        fontSize: 11,
        marginTop: 2,
        fontWeight: 'bold'
    }
});