import React from "react";
import { View, Text } from "react-native";

import { MainBg } from "../../components/MainBg";
import { DivButton } from '../../components/Divbutton'
import { NextButton } from "../../components/NextButton";
import { BackButton } from "../../components/BackButton";

import user from '../../assets/user.png'
import users3 from '../../assets/users3.png'
import users4 from '../../assets/users4.png'

import { styles } from "./styles";


export function Inicio({ navigation }: any) {

    return (

        <MainBg>
            <>

                <View style={styles.body}>

                    <View style={styles.container}>
                        <Text style={styles.msg}>
                            Como gostaria de fechar{'\n'}a conta hoje?
                        </Text>
                    </View>

                    <DivButton
                        nome={'Individual'}
                        toScreen={'IndivStep1'}
                        source={user}
                        navigation={navigation} />

                    <DivButton
                        nome={'Igualmente'}
                        toScreen={'IgualStep1'}
                        source={users3}
                        navigation={navigation} />

                    <DivButton
                        nome={'Mista!'}
                        toScreen={'MistaStep1'}
                        source={users4}
                        navigation={navigation} />

                </View>
            </>

        </MainBg>
    )
}


