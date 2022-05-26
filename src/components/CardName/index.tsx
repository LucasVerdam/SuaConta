import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { global } from '../../context/NomeContext';

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
                nomes[id - 1].pgmtC = !nomes[id - 1].pgmtC;
                console.warn(nomes);
            }}
        >

            <Text style={styles.listItem}>{id}.{nome}</Text>
        </Pressable>
    );
}