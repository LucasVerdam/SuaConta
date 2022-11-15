import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
    id: number;
    nome: string;
    conta: number;
}

export function PgmtC({ id, nome, conta }: Props) {

    return (
        <View style={styles.container}>

            <Text style={styles.txt}>
                {id + 1}.{nome}
            </Text>

            <Text style={{ fontSize: 15, textAlign: 'center' }}>
                Vai pagar

                <Text style={{ fontWeight: "500" }}> R${conta.toFixed(2)} </Text>

                no cartão.
            </Text>
        </View>
    );
}