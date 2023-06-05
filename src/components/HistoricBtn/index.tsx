import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import Book from '../../assets/book-bookmark-fill.svg'

import { styles } from './styles';

interface Props {
    navigation: any;
}

export function Historic({ navigation }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { navigation.navigate('Saves'); }}>

            <Book />
            <Text style={styles.txt}>Histórico</Text>

        </TouchableOpacity >
    );
}