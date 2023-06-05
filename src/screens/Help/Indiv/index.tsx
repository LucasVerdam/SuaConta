import React from 'react';
import { View, TouchableWithoutFeedback, Text, Image } from "react-native";

import { PlateBg } from '../../../components/PlateBg';

import { styles } from "./styles";


export function Indiv({ navigation }: any) {

    return (

        <PlateBg>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('End')}>
                <View style={styles.container}>

                    <Text style={styles.title}>

                        Individual
                    </Text>


                    <Text style={styles.tx2}>

                        Aqui é quando você só quer{'\n'}
                        saber quanto <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            você </Text>
                        deve pagar.

                    </Text>

                    <Text style={styles.tx1}>

                        Informe o <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            valor </Text>
                        do que{'\n'}
                        comprou e do que <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            dividiu.</Text>
                    </Text>

                    <Text style={styles.tx2}>

                        Te diremos apenas{'\n'}
                        a <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            sua </Text>
                        parte da conta.

                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </PlateBg>

    );
}

