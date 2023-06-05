import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import minus from '../../assets/minus.png'
import { styles } from './styles';

interface Props {
    func: () => any;
}

export function PopBtn({ func }: Props) {
    return (
        <TouchableOpacity style={styles.popBtn}
            onPress={func}
        >

            <Image
                source={minus}
                style={styles.img}
            />

        </TouchableOpacity>
    );
}