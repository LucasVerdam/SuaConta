import React from 'react';
import { View, TouchableWithoutFeedback, Text, Image } from "react-native";

import { PlateBg } from '../../../components/PlateBg';

import { styles } from "./styles";


export function Mista({ navigation }: any) {

    return (

        <PlateBg>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('End')}>
                <View style={styles.container}>

                    <Text style={styles.title}>

                        Mista
                    </Text>


                    <Text style={styles.tx2}>

                        Quando o valor de <Text style={{ fontWeight: 'bold' }}>
                            um </Text>
                        ou <Text style={{ fontWeight: 'bold' }}>
                            mais </Text>
                        produtos será dividido entre <Text style={{ fontWeight: 'bold' }}>
                            alguns </Text>
                        ou <Text style={{ fontWeight: 'bold' }}>
                            todos </Text>
                        do grupo.

                    </Text>

                    <Text style={styles.tx1}>

                        Informe os <Text style={{ fontWeight: 'bold' }}>
                            nomes</Text>
                        , o que será{'\n'} <Text style={{ fontWeight: 'bold' }}>
                            pago </Text>
                        e por <Text style={{ fontWeight: 'bold' }}>
                            quem. </Text>
                        E pronto!

                    </Text>

                    <Text style={styles.tx2}>

                        Fazemos o trabalho{'\n'} duro por você!

                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </PlateBg>

    );
}

