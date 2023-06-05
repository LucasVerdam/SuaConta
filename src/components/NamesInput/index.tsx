import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, ScrollView, BackHandler, Keyboard } from 'react-native';

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

        let arrayN: string[] = []

        nomes.map((i) => {
            arrayN.push(i.nome)
        })

        if (arrayN.includes(pessoas)) {
            Alert.alert('Este nome já está listado!', 'Utilize outro.', [
                {
                    text: 'OK',
                    onPress() {
                        setKey(key + 1);
                        setPessoas('');
                    }
                }
            ])
        } else if (pessoas == '') {
            Alert.alert('Nenhum nome foi digitado!', 'Digite ao menos uma letra.', [
                {
                    text: 'OK',
                    onPress() {
                        setKey(key + 1);
                        setPessoas('');
                    }
                }
            ])
        } else {
            let pessoa = { ...pessoaModel }
            pessoa.id = nomes.length
            pessoa.nome = pessoas

            nomes.push(pessoa)
            stateNomes([...nomes])

            setKey(key + 1)
            setPessoas('')
        }
    }

    function popOfList() {
        nomes.pop()
        stateNomes([...nomes])
    }

    return (
        <ScrollView>
            <View style={{ maxHeight: 250 }}>
                <Text style={styles.txt}>
                    Quem vai pagar?
                </Text>

                <ScrollView>
                    {nomes.map((i) => {
                        return (
                            <View
                                key={i.id}
                                style={styles.list}
                            >
                                <Text style={styles.listItem}>
                                    {i.id + 1}. {i.nome}
                                </Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>



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
