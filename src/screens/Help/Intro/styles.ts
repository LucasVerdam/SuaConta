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
        fontSize: 28,
        textAlign: 'center',
    },

    tx1: {
        fontSize: 22,
        textAlign: 'left',
        paddingLeft: 15,
        color: '#000'
    },

    tx2: {
        fontSize: 22,
        textAlign: 'right',
        marginBottom: 30,
        paddingRight: 15
    }

});


