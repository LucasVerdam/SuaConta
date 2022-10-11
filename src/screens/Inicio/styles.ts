import { StyleSheet } from "react-native";
import { themes } from "../../global/styles/themes";
import { Dimensions } from "react-native";


export const styles = StyleSheet.create({

    container: {
        borderRadius: 10
    },

    msg: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000'
    },

    body: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

})
