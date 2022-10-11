import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TextInput } from 'react-native';

import { global } from '../../context/ContaContext';
import { AddBtn } from '../AddButton';
import { PopBtn } from '../PopButton';

import { styles } from './styles';


export function NamesInput() {

    const { nomes, stateNomes } = global()

    const [pessoas, setPessoas] = useState('')
    const [key, setKey] = useState(0)

    const pessoaModel = {
        id: 0,
        nome: '',
        conta: 0,
        dinheiro: 0,
        troco: 0,
        pgmtC: false,
        pgmtP: false
    }


    function addToList() {
        let pessoa = { ...pessoaModel }
        pessoa.id = nomes.length
        pessoa.nome = pessoas

        nomes.push(pessoa)
        stateNomes([...nomes])

        setKey(key + 1)
    }

    function popOfList() {
        nomes.pop()
        stateNomes([...nomes])
    }

    return (

        <ScrollView>
            <Text style={styles.txt}>
                Quem vai pagar?
            </Text>

            <FlatList
                style={styles.list}
                data={nomes}
                showsVerticalScrollIndicator
                persistentScrollbar
                renderItem={({ item }) => {

                    return (
                        <Text style={styles.listItem}>
                            {item.id + 1}. {item.nome}
                        </Text>
                    );
                }} />

            <View key={key} style={styles.container}>
                <TextInput
                    style={styles.input}
                    maxLength={16}
                    placeholder='Digite os nomes'
                    onChangeText={setPessoas}
                />

                <View style={styles.btnContainer}>

                    <AddBtn func={addToList} />

                    {nomes[0] ?
                        <PopBtn func={popOfList} /> : null}
                </View>
            </View>
        </ScrollView>

    );
}
