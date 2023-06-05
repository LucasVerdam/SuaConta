import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface Props {
    onPress: () => void;
}

export function RemoveBtn({ onPress }: Props) {

    return (
        <View style={{ opacity: 0.88 }}>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                <Text style={styles.txtBtn}>Remover</Text>
            </TouchableOpacity>
        </View>
    );
}