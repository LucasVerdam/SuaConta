import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import back from '../../assets/back.png'

import { styles } from './styles';


interface Props {
    onPress: () => void;
}

export function BackButton({ onPress }: Props) {
    return (
        <TouchableOpacity
            style={styles.fechar}
            onPress={onPress}
        >
            <Image style={styles.img} source={back}></Image>
        </TouchableOpacity>

    );
}