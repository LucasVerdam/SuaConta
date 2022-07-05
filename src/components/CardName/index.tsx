import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { global } from '../../context/ContaContext';

import { styles } from './styles';

interface Props {
    id: number;
    nome: string;
}

export function CardName({ id, nome }: Props) {

    const [pressed, setPressed] = useState(false)
    const { nomes } = global()

    return (
        <Pressable
            style={pressed ? styles.pressNames : styles.names}
            onPress={() => {
                setPressed(!pressed);
                nomes[id].pgmtC = !nomes[id].pgmtC;
            }}
        >

            <Text style={styles.listItem}>{id + 1}.{nome}</Text>
        </Pressable>
    );
}