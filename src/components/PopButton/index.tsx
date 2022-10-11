import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';

interface Props {
    func: () => any;
}

export function PopBtn({ func }: Props) {
    return (
        <Pressable style={styles.popBtn}
            onPress={func}
        >
            <Text style={styles.txt}>
                -
            </Text>
        </Pressable>
    );
}