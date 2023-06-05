import React from 'react';
import { View, TouchableWithoutFeedback, Text, Image } from "react-native";

import { PlateBg } from '../../../components/PlateBg';

import { styles } from "./styles";


export function End({ navigation }: any) {

    return (

        <PlateBg>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Inicio')}>
                <View style={styles.container}>

                    <Text style={styles.title}>

                        Sem confusão
                    </Text>

                    <Text style={styles.tx1}>

                        Ao final de cada operação{'\n'}
                        você verá um
                        <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>
                            {'\n'}relatório detalhado
                        </Text> da{'\n'}

                        <Text style={{ fontWeight: 'bold' }}>
                            Sua Conta!
                        </Text>
                    </Text>

                </View>
            </TouchableWithoutFeedback>
        </PlateBg>

    );
}

