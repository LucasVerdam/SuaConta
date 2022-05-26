import React from 'react';
import { View } from 'react-native';

import { PlateTop, PlateBottom } from '../Plates';

import { styles } from './styles';


interface Props {
    children: JSX.Element;
}

export function PlateBg({ children }: Props) {
    return (
        <View style={styles.container}>

            <PlateTop />
            <PlateBottom />
            {children}

        </View>
    );
}