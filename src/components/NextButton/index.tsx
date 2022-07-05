import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import next from '../../assets/next.png'

import { styles } from './styles';


interface Props {
    onPress: () => void;
}

export function NextButton({ onPress }: Props) {
    return (
        <TouchableOpacity
            style={styles.next}
            onPress={onPress}
        >
            <Image style={styles.img} source={next}></Image>
        </TouchableOpacity>
    );
}