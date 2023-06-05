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

                        Quando o valor de <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            um </Text>
                        ou <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            mais </Text>
                        produtos será dividido entre <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            alguns </Text>
                        ou <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            todos </Text>
                        do grupo.

                    </Text>

                    <Text style={styles.tx1}>

                        Informe os <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            nomes</Text>
                        , o que será{'\n'} <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            pago </Text>
                        e por <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
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

