import React from 'react';
import { Text, TouchableOpacity, Image, ImageProps, View } from 'react-native';
import { styles } from './styles';

interface Props extends ImageProps {
    nome: string;
    source: ImageProps;
    toScreen: string;
    navigation: any;
}

export function DivButton({ nome, source, toScreen, navigation }: Props) {

    const nav = () => navigation.navigate(toScreen)

    return (
        <View style={{ opacity: 0.8 }}>
            <TouchableOpacity
                style={styles.button}
                onPress={nav}
            >
                <Image style={styles.img} source={source}></Image>
                <Text style={styles.textBtn}>{nome}</Text>
            </TouchableOpacity>
        </View>
    )
}