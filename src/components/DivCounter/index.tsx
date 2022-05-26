import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';


interface Props {
    text: string;
    numDiv: number;
    inc: () => void;
    dec: () => void;
}

export function DivCounter({ text, numDiv, inc, dec }: Props) {
    return (
        <View>

            <Text style={styles.txt1}>{text}</Text>

            <View style={{ alignItems: 'flex-end', paddingBottom: 50 }}>

                <View style={styles.counter}>
                    <Text>{numDiv}</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 }}>

                    <Pressable style={styles.menos} onPress={dec}>
                        <Text style={{ color: "#fff", fontWeight: '900' }}>
                            -
                        </Text>
                    </Pressable>


                    <Pressable style={styles.mais} onPress={inc}>
                        <Text style={{ color: "#fff", fontWeight: '500' }}>
                            +
                        </Text>
                    </Pressable>

                </View>
            </View>


        </View>
    );
}