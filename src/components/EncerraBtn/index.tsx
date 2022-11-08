import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface Props {
    onPress: () => void;
}

export function Encerra({ onPress }: Props) {

    return (
        <View style={{ opacity: 0.88 }}>
            <TouchableOpacity
                style={styles.back}
                onPress={onPress}
            >
                <Text style={styles.txtBtn}>Encerra</Text>
            </TouchableOpacity>
        </View>
    );

}