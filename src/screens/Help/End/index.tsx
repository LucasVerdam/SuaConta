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
                        você verá um <Text style={{ fontWeight: 'bold' }}>
                            relatório{'\n'}detalhado!</Text>
                    </Text>

                </View>
            </TouchableWithoutFeedback>
        </PlateBg>

    );
}

