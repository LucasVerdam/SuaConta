import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';


interface Props {
    text?: string;
    subText?: string;
    placeholder: string;
    maxLenght?: number;
    onChangeText: any;
}

export function MoneyInput({ text, subText, placeholder, maxLenght = 8, onChangeText }: Props) {
    return (
        <View style={{ marginBottom: 30 }}>
            <Text style={styles.txt1}>{text}</Text>
            {
                subText ?
                    <Text style={styles.txt2}>{subText}</Text>
                    : null}

            <View style={{ alignItems: 'flex-end' }}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.input}
                    keyboardType='decimal-pad'
                    maxLength={maxLenght}
                    onChangeText={onChangeText}
                ></TextInput>
            </View>
        </View>
    );
}