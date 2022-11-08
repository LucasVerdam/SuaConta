import React, { useEffect, useState } from 'react';
import { Text, Pressable } from 'react-native';

import { global } from '../../context/ContaContext';

import { styles } from './styles';

interface Props {
    id: number;
    nome: string;
}

export function CardName({ id, nome }: Props) {

    const { nomes } = global()

    const [pressed, setPressed] = useState(false)

    useEffect(() => {
        setPressed(pressed)
    }, [nomes[id].pgmtC])

    return (
        <Pressable
            key={id}
            style={nomes[id].pgmtC ? styles.pressedN : styles.names}
            onPress={() => {
                setPressed(!pressed)
                nomes[id].pgmtC = !nomes[id].pgmtC
            }}
        >

            <Text style={styles.listItem}>{id + 1}.{nome}</Text>
        </Pressable>
    );
}