import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';


export function HelpBtn({ nav }: any) {
    return (
        <Pressable
            style={styles.container}
            onPress={() => nav.navigate('Intro')}
        >
            <Text style={styles.text}>?</Text>
        </Pressable>
    );
}