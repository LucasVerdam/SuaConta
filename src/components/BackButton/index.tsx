import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import back from '../../assets/back.png'

import { styles } from './styles';


interface Props {
    onPress: () => void;
}

export function BackButton({ onPress }: Props) {
    return (
        <View style={{ opacity: 0.88 }}>
            <TouchableOpacity
                style={styles.back}
                onPress={onPress}
            >
                <Image style={styles.img} source={back}></Image>
            </TouchableOpacity>
        </View>

    );
}