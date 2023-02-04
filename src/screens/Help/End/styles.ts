import { StyleSheet, Dimensions } from 'react-native';
import { themes } from '../../../global/styles/themes';

const circleWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginVertical: circleWidth / 4,
    },

    title: {
        fontWeight: '700',
        fontSize: 40,
        marginTop: 15,
        textAlign: 'center',
        color: themes.colors2.preto,
    },

    tx1: {
        fontSize: 23,
        textAlign: 'center',
        paddingLeft: 15
    },

    tx2: {
        fontSize: 22,
        textAlign: 'right',
        paddingRight: 15
    }

});


