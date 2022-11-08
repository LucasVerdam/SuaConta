import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        marginTop: 30,
        paddingHorizontal: 15,
        fontWeight: '300',
        textAlign: 'left',
        color: themes.colors2.cinzaTxt
    },

    list: {
        maxHeight: 150,
        marginHorizontal: 25
    },

    listItem: {
        fontSize: 18,
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginTop: 3,
        borderRadius: 10,
        color: themes.colors2.cinzaTxt,
        backgroundColor: themes.colors2.pelecla
    },

    container: {
        flex: 1,
        marginVertical: 10,
        alignItems: 'center'
    },

    input: {
        width: 200,
        height: 50,
        borderRadius: 40,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        backgroundColor: themes.colors2.cinzaBg
    },

    btnContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        marginTop: 20,
        justifyContent: 'center'
    }

});