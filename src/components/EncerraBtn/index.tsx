import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface Props {
    text?: string;
    onPress: () => void;
}

export function Encerra({ text = 'Encerra', onPress }: Props) {

    return (
        <View style={{ opacity: 0.88 }}>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                <Text style={styles.txtBtn}>{text}</Text>
            </TouchableOpacity>
        </View>
    );

}