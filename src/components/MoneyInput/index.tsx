import React from 'react';
import { View, Text, TextInput } from 'react-native';

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


    return (
        <View style={{ marginBottom: 30 }}>
            <Text style={styles.txt1}>{text}</Text>
            {
                subText ?
                    <Text style={styles.txt2}>{subText}</Text>
                    : null}


            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                <TextInput
                    key={k}
                    style={styles.input}
                    placeholder={placeholder}
                    keyboardType='decimal-pad'
                    maxLength={maxLenght}
                    onChangeText={(n) => onChangeText(parseFloat(n.replace(',', '.')))}
                ></TextInput>
            </View>
        </View>
    );
}