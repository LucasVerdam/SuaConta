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
        marginBottom: 20
    },
});