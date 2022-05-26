import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { global } from '../../context/NomeContext';

import { styles } from './styles';


interface Props {
    onChangeText: any;
}

export function TrocoInput({ onChangeText }: Props) {

    const { nomes } = global()

    return (
        <View style={{ marginTop: 10 }}>

            {nomes.map(i => {
                if (nomes[i.id - 1].pgmtC == false) {
                    return (
                        <View
                            key={i.id}
                            style={styles.container}
                        >
                            <Text style={styles.names}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    {i.id}.{i.nome}</Text> vai pagar R${i.conta.toFixed(2)} com:
                            </Text>
                            <TextInput
                                placeholder='R$'
                                style={styles.input}
                                keyboardType='decimal-pad'
                                onChangeText={onChangeText}
                            />
                        </View>
                    );
                }
            })}


        </View>
    );
}