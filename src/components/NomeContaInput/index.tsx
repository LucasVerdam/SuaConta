import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

interface Props {
    onChange: React.Dispatch<React.SetStateAction<string>>
}

export function ContaInput({ onChange }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>
                Digite o nome da sua conta:
            </Text>
            <Text>(Recomenda-se que seja o nome do local!)</Text>

            <TextInput
                style={styles.input}
                placeholder='Barzinho X'
                maxLength={16}
                onChangeText={onChange}
            />
        </View>
    );
}