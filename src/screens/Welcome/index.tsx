import React from 'react';
import { View, TouchableWithoutFeedback, Text, Image } from "react-native";

import { PlateBg } from '../../components/PlateBg';

import { styles } from "./styles";


export function Welcome({ navigation }: any) {

    return (

        <PlateBg>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Inicio')}>
                <View style={styles.container}>

                    <Text style={styles.title}>

                        Bem vindo ao{'\n'}
                        <Text style={{ fontWeight: 'bold' }}>Sua Conta!</Text>

                    </Text>

                    <Text style={styles.tx1}>

                        Aqui você fecha a conta do{'\n'}
                        <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}>seu </Text>
                        jeito!

                    </Text>

                    <Text style={styles.tx2}>

                        Deixe os cálculos com a{'\n'}
                        gente e
                        <Text style={{ fontWeight: 'bold', color: '#2f2f2f' }}> relaxe...</Text>

                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </PlateBg>

    );
}

