import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';

interface Props {
    func: () => any;
}

export function AddBtn({ func }: Props) {
    return (
        <Pressable style={styles.addBtn}
            onPress={func}
        >

            <Text style={styles.txt}>
                +
            </Text>

        </Pressable>
    );
}