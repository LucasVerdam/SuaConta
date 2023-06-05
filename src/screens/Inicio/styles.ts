import { StyleSheet } from "react-native";
import { themes } from "../../global/styles/themes";
import { Dimensions } from "react-native";


export const styles = StyleSheet.create({

    container: {
        borderRadius: 10,
        marginBottom: -30
    },

    msg: {
        fontSize: 23,
        textAlign: 'center',
        color: '#3f3f3f'
    },

    body: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#C4C4C4'
    },

})
