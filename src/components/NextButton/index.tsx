import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import next from '../../assets/next.png'

import { styles } from './styles';


interface Props {
    onPress: () => void;
}

export function NextButton({ onPress }: Props) {
    return (
        <View style={{ opacity: 0.88 }}>
            <TouchableOpacity
                style={styles.next}
                onPress={onPress}
            >
                <Image style={styles.img} source={next}></Image>
            </TouchableOpacity>
        </View>
    );
}