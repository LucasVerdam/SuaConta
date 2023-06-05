import { StyleSheet } from "react-native";
import { themes } from "../../global/styles/themes";


export const styles = StyleSheet.create({

    button: {
        height: 105,
        width: 105,
        borderRadius: 8,
        borderBottomEndRadius: 32,
        borderTopLeftRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes.colors2.pele
    },

    textBtn: {
        fontSize: 18,
        marginTop: 4,
        fontWeight: '500',
        color: '#000'
    },

    img: {
        height: 40,
        width: 40,
    }
})

