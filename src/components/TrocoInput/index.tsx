import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { global } from '../../context/ContaContext';

import { styles } from './styles';

interface Props {
    id: number;
    nome: string;
    conta: number;
}

export function TrocoInput({ id, nome, conta }: Props) {

    const { nomes, stateNomes } = global()
    const [valor, setValor] = useState('')

    function Set(valor: string) {
        setValor(valor)
        nomes[id].dinheiro = Number(valor)
        stateNomes([...nomes])
    }

    return (
        <View style={styles.container}>

            <Text style={styles.txt}>
                {id + 1}.{nome}
            </Text>

            <Text style={{ fontSize: 14 }}>
                Vai pagar

                <Text style={{ fontWeight: "500" }}> R${conta.toFixed(2)} </Text>
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