import { StyleSheet, Dimensions } from 'react-native';
import { themes } from '../../../global/styles/themes';

const circleWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
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
        fontSize: 22,
        textAlign: 'left',
        paddingLeft: 15,
        color: '#3f3f3f'
    },

    tx2: {
        fontSize: 22,
        textAlign: 'right',
        paddingRight: 15,
        color: '#3f3f3f'
    }

});


