import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { global } from '../../context/ContaContext';
import { styles } from './styles';

interface Props {
    k?: number;
    text?: string;
    subText?: string;
    placeholder: string;
    maxLenght?: number;
    onChangeText: any;
}


export function MoneyInput({ k, text, subText, placeholder, maxLenght = 7, onChangeText }: Props) {

    const { valores } = global();

    return (
        <View style={{ marginBottom: 30 }}>
            <Text style={styles.txt1}>{text}</Text>
            {
                subText ?
                    <Text style={styles.txt2}>{subText}</Text>
                    : null}


            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                {/* <Text style={{ fontSize: 17 }}>R${valores.total.toFixed(2)}  x</Text> */}
                <TextInput
                    key={k}
                    style={styles.input}
                    placeholder={placeholder}
                    keyboardType='decimal-pad'
                    maxLength={maxLenght}
                    onChangeText={onChangeText}
                ></TextInput>
            </View>
        </View>
    );
}