import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: themes.colors2.pelecla,
    },


    input: {
        width: 100,
        height: 45,
        borderRadius: 40,
        marginTop: 15,
        marginHorizontal: 15,
        paddingHorizontal: 15,
        backgroundColor: themes.colors2.cinzaBg,
    }

    /* container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: themes.colors2.pelecla,
    }, */
});