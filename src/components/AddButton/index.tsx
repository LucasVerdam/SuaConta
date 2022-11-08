import React from 'react';
import { Text, Pressable, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
    func: () => any;
}

export function AddBtn({ func }: Props) {
    return (
        <TouchableOpacity
            style={styles.addBtn}
            onPress={func}
        >

            <Text style={styles.txt}>
                +
            </Text>

        </TouchableOpacity>
    );
}