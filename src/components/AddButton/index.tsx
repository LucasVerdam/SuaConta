import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import plus from '../../assets/plus.png'
import { styles } from './styles';


interface Props {
    func: () => any;
}

export function AddBtn({ func }: Props) {
    return (
        <TouchableOpacity
            style={styles.addBtn}
            onPress={func}
        >

            <Image
                source={plus}
                style={styles.img}
            />

        </TouchableOpacity>
    );
}