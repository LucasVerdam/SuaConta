import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
    func: () => any;
}

export function PopBtn({ func }: Props) {
    return (
        <TouchableOpacity style={styles.popBtn}
            onPress={func}
        >
            <Text style={styles.txt}>
                -
            </Text>
        </TouchableOpacity>
    );
}