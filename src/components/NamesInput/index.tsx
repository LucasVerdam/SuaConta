import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TextInput, Pressable } from 'react-native';

import { global } from '../../context/NomeContext';

import { styles } from './styles';


export function NamesInput() {

    const { nomes, state } = global()

    const [pessoas, setPessoas] = useState('')


    const pessoaModel = {
        id: 0,
        nome: '',
        conta: 0,
        dinheiro: 0,
        troco: 0,
        pgmtC: false
    }


    function addToList() {
        let pessoa = { ...pessoaModel }
        pessoa.id = nomes.length + 1
        pessoa.nome = pessoas

        nomes.push(pessoa)
        state([...nomes])
    }

    function popOfList() {
        nomes.pop()
        state([...nomes])
    }

    return (

        <ScrollView>
            <Text style={styles.txt}>
                Quem vai pagar?
            </Text>

            <FlatList style={styles.list}
                data={nomes}
                showsVerticalScrollIndicator
                persistentScrollbar
                renderItem={({ item }) => {

                    return (
                        <Text style={styles.listItem}>
                            {item.id}. {item.nome}
                        </Text>
                    );
                }} />

            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder='Digite os nomes'
                    onChangeText={setPessoas}
                />

                <View style={styles.btnContainer}>
                    <Pressable style={styles.addBtn}
                        onPress={addToList}
                    >
                        <Text style={{ color: "#fff", fontWeight: '500' }}>
                            +
                        </Text>
                    </Pressable>

                    {nomes[0] ? <Pressable style={styles.popBtn}
                        onPress={popOfList}
                    >
                        <Text style={{ color: "#fff", fontWeight: '900' }}>
                            -
                        </Text>
                    </Pressable> : null}
                </View>
            </View>
        </ScrollView>

    );
}
