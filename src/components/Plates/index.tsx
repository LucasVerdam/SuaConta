import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

function PlateBottom() {
    return (
        <View style={styles.plateB1}>
            <View style={styles.plateB2}>
                <View style={styles.plateB3}></View>
            </View>
        </View>

    );
}

function PlateTop() {
    return (
        <View style={styles.plateT1}>
            <View style={styles.plateT2}>
                <View style={styles.plateT3}></View>
            </View>
        </View>

    );
}

export { PlateBottom, PlateTop }