import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 15,
        margin: 30,
        alignItems: 'center'
    },

    input: {
        width: 200,
        height: 50,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderColor: '#000',
        backgroundColor: themes.colors2.pelecla
    },

    txt: {
        fontSize: 25
    }
});