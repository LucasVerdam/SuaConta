import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        height: 38,
        width: 130,
        marginVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: themes.colors2.preto,
    },

    contact: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    names: {
        fontSize: 20,
        color: '#fff'
    },

    null: {
        height: 20,
        width: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#3ebd93',
        backgroundColor: '#fff'
    },

    checked: {
        height: 20,
        width: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#3ebd93',
        backgroundColor: '#3ebd93'
    }

});