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

                    {/* <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 150, height: 150, borderRadius: 75 }} source={{ uri: 'https://mega.ibxk.com.br/2015/08/04/04183918599721.jpg?ims=610x' }}></Image>
                    </View> */}

                    <Text style={styles.tx1}>

                        Aqui você fecha a conta do{'\n'}
                        <Text style={{ fontWeight: 'bold' }}>seu </Text>
                        jeito!

                    </Text>

                    <Text style={styles.tx2}>

                        Deixe os cálculos com a{'\n'}
                        gente e
                        <Text style={{ fontWeight: 'bold' }}> relaxe...</Text>

                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </PlateBg>

    );
}

