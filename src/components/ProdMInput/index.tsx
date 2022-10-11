import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, ScrollView } from 'react-native';

import { global } from '../../context/ContaContext';
import { AddBtn } from '../AddButton';
import { CardNameP } from '../CardNameP';
import { PopBtn } from '../PopButton';
import { styles } from './styles';


interface PModel {
    id: number;
    nome: string;
    qtd: number;
    valor: number;
    valorT: number;
    pessoas: string[];
}

export function ProdInput() {

    const { nomes, produtos, stateProdutos, valores } = global();

    const [key, setKey] = useState(0)
    const [nomeP, setNomeP] = useState('')
    const [valorP, setValorP] = useState(0)
    const [qtd, setQtd] = useState(1)


    const produtoModel: PModel = {
        id: 0,
        nome: '',
        qtd: 0,
        valor: 0,
        valorT: 0,
        pessoas: []
    }


    function addProd() {

        let produto = { ...produtoModel }

        produto.id = key
        produto.nome = nomeP
        produto.qtd = qtd
        produto.valor = valorP
        produto.valorT = valorP * qtd
        nomes.map((i) => { i.pgmtP ? produto.pessoas.push(i.nome) : null; })

        produtos.push(produto)
        stateProdutos([...produtos])

        setQtd(1)
        setKey(key + 1)
        nomes.map(i => nomes[i.id].pgmtP = false)

        console.warn(produtos);

    }


    return (

        <>
            <View key={key} style={styles.container}>

                <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.txt}>Nome do produto:</Text>

                    <TextInput
                        style={styles.inputNome}
                        maxLength={20}
                        placeholder='ex. Pizza'
                        onChangeText={setNomeP}
                    />
                </View>

                <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.txt}>Valor unitário:</Text>

                    <TextInput
                        style={styles.inputValor}
                        placeholder='R$'
                        keyboardType='decimal-pad'
                        maxLength={7}
                        onChangeText={(n) => setValorP(Number(n))}
                    />
                </View>

                <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text style={styles.txt}>Quantidade:</Text>


                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 150 }}>

                        <PopBtn func={() => { qtd > 1 ? setQtd(qtd - 1) : null }} />
                        <View
                            style={
                                {
                                    height: 40,
                                    width: 40,
                                    borderWidth: 0.5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#fff'
                                }
                            }>
                            <Text>{qtd}</Text>
                        </View>
                        <AddBtn func={() => { setQtd(qtd + 1); }} />
                    </View>


                </View>


                <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.txt}>Pago por:</Text>

                    <ScrollView horizontal>
                        <View style={styles.cardNames}>
                            {nomes.map(i =>
                                <CardNameP
                                    id={i.id}
                                    key={i.id}
                                    nome={i.nome}
                                />
                            )}
                        </View>
                    </ScrollView>
                </View>
            </View>


            <View style={styles.btnContainer}>

                <AddBtn func={() => addProd()} />

                {nomes[0] ?
                    <PopBtn func={() => { produtos.pop(); stateProdutos([...produtos]); }} />
                    : null}
            </View>
        </>

    );
}