import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { global } from '../../context/ContaContext';
import { styles } from './styles';


export function ITrocoInput() {

    const { valores, stateValores } = global()
    const [valor, setValor] = useState('')

    function Set(valor: string) {
        setValor(valor)
        valores.valDin = Number(valor)
    }

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 16 }}>
                Vai pagar

                <Text style={{ fontWeight: "500" }}> R${valores.total.toFixed(2)} </Text>
                com:

            </Text>


            <View style={{ alignItems: 'flex-end' }}>

                <TextInput
                    style={styles.input}
                    maxLength={7}
                    placeholder='R$'
                    keyboardType='decimal-pad'
                    onChangeText={(valor) => Set(valor)}
                />
            </View>
        </View>
    );
}