import { StyleSheet } from "react-native";
import { themes } from "../../global/styles/themes";


export const styles = StyleSheet.create({

    button: {
        height: 100,
        width: 100,
        borderRadius: 8,
        borderBottomEndRadius: 32,
        borderTopLeftRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes.colors2.pele
    },

    textBtn: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
    },

    img: {
        height: 40,
        width: 40,
    }
})

