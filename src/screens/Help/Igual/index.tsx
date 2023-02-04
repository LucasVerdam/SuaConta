import React from 'react';
import { View, TouchableWithoutFeedback, Text, Image } from "react-native";

import { PlateBg } from '../../../components/PlateBg';

import { styles } from "./styles";


export function Igual({ navigation }: any) {

    return (

        <PlateBg>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('End')}>
                <View style={styles.container}>

                    <Text style={styles.title}>

                        Igualmente
                    </Text>


                    <Text style={styles.tx1}>

                        Quando todos forem dividir{'\n'}
                        o valor da conta por <Text style={{ fontWeight: 'bold' }}>
                            igual!</Text>

                    </Text>

                    <Text style={styles.tx2}>

                        É só informar o valor <Text style={{ fontWeight: 'bold' }}>
                            total </Text>
                        e{'\n'}
                        por <Text style={{ fontWeight: 'bold' }}>
                            quem </Text>
                        ele será dividido.

                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </PlateBg>

    );
}

