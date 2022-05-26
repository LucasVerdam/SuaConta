import { StyleSheet, Dimensions } from 'react-native';
import { themes } from '../../global/styles/themes';

const circleWidth = Dimensions.get('window').width
const circleHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({

    container: {
        width: circleWidth,
        height: circleWidth / 4,
        backgroundColor: '#fff'
    },

    plateB1: {
        position: 'absolute',
        top: circleHeight - circleWidth / 4,
        height: circleWidth,
        width: circleWidth,
        borderRadius: circleWidth / 2,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: themes.colors2.preto
    },

    plateB2: {
        height: circleWidth / 1.2,
        width: circleWidth / 1.2,
        borderRadius: circleWidth / 2,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: themes.colors2.pele
    },

    plateB3: {
        height: circleWidth / 1.5,
        width: circleWidth / 1.5,
        borderRadius: circleWidth / 2,
        backgroundColor: themes.colors2.branco
    },

    plateT1: {
        position: 'absolute',
        bottom: circleHeight - circleWidth / 4,
        height: circleWidth,
        width: circleWidth,
        borderRadius: circleWidth / 2,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: themes.colors2.preto
    },

    plateT2: {
        height: circleWidth / 1.2,
        width: circleWidth / 1.2,
        borderRadius: circleWidth / 2,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: themes.colors2.pele
    },

    plateT3: {
        height: circleWidth / 1.5,
        width: circleWidth / 1.5,
        borderRadius: circleWidth / 2,
        backgroundColor: themes.colors2.branco
    }
});