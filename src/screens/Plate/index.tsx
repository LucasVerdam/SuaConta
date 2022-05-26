import React from 'react';
import { Text, View } from 'react-native';
import { PlateBg } from '../../components/PlateBg';
import { styles } from './styles';

export function Plate() {
    return (
        <PlateBg>
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>OI</Text>
            </View>
        </PlateBg>
    );
}