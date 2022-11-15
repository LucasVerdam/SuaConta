import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView, Alert, Image } from 'react-native';

import { global } from '../../context/ContaContext';
import { AddBtn } from '../AddButton';
import { CardNameP } from '../CardNameP';
import { PopBtn } from '../PopButton';

import user from '../../assets/user.png'
import { styles } from './styles';

interface PModel {
    id: number;
    nome: string;
    qtd: number;
    valor: number;
    valorT: number;
    pessoas: string[];
    qtdPessoas: number;
}


export function ProdInput() {

    const { nomes, produtos, stateProdutos } = global();

    const [key, setKey] = useState(0)
    const [nomeP, setNomeP] = useState('')
    const [valorP, setValorP] = useState(0)
    const [qtd, setQtd] = useState(1)
    const [qtdP, setQtdP] = useState(1)


    const produtoModel: PModel = {
        id: 0,
        nome: '',
        qtd: 0,
        valor: 0,
        valorT: 0,
        pessoas: [],
        qtdPessoas: 0
    }


    function addProd() {

        let arrayP: string[] = []
        let arrayN: string[] = []

        produtos.map((i) => {
            arrayP.push(i.nome)
        })

        nomes?.map((i) => {
            i.pgmtP ? arrayN.push(i.nome) : null
        })

        if (arrayP.includes(nomeP)) {
            Alert.alert('Este produto já está listado!', 'Nomeie outro.', [
                {
                    text: 'OK',
                    onPress() {
                        null
                    }
                }
            ])
        } else if (nomes.length > 0) {
            if (nomeP == '' || valorP == 0 || arrayN.length < 1) {

                Alert.alert('Preencha todos os campos!', 'Nome / Valor / Pago por', [
                    {
                        text: 'OK',
                        onPress() {
                            null
                        }
                    }
                ])
            } else {
                let produto = { ...produtoModel }

                produto.id = produtos.length
                produto.nome = nomeP
                produto.qtd = qtd
                produto.valor = valorP
                produto.valorT = valorP * qtd

                if (nomes.length > 0) {
                    nomes.map((i) => { i.pgmtP ? produto.pessoas.push(i.nome) : null; })
                    produto.qtdPessoas = produto.pessoas.length
                } else {
                    produto.qtdPessoas = qtdP
                }

                produtos.push(produto)
                stateProdutos([...produtos])

                setQtd(1)
                setQtdP(1)
                setKey(key + 1)
                setNomeP('')
                setValorP(0)
                nomes.map(i => nomes[i.id].pgmtP = false)
            }

        } else if (nomeP == '' || valorP == 0) {
            Alert.alert('Preencha todos os campos!', 'Nome / Valor', [
                {
                    text: 'OK',
                    onPress() {
                        null
                    }
                }
            ])
        } else {

            let produto = { ...produtoModel }

            produto.id = produtos.length
            produto.nome = nomeP
            produto.qtd = qtd
            produto.valor = valorP
            produto.valorT = valorP * qtd

            if (nomes.length > 0) {
                nomes.map((i) => { i.pgmtP ? produto.pessoas.push(i.nome) : null; })
                produto.qtdPessoas = produto.pessoas.length
            } else {
                produto.qtdPessoas = qtdP
            }

            produtos.push(produto)
            stateProdutos([...produtos])

            setQtd(1)
            setQtdP(1)
            setKey(key + 1)
            setNomeP('')
            setValorP(0)
            nomes.map(i => nomes[i.id].pgmtP = false)
        }
    }


    return (

        <>
            <View key={key} style={styles.container}>

                <View style={styles.nomeP}>
                    <Text style={styles.txt}>
                        Nome do produto:
                    </Text>

                    <TextInput
                        style={styles.inputNome}
                        maxLength={20}
                        placeholder='ex. Pizza'
                        onChangeText={setNomeP}
                    />
                </View>


                <View style={styles.valorU}>
                    <Text style={styles.txt}>
                        Valor unitário:
                    </Text>

                    <TextInput
                        style={styles.inputValor}
                        placeholder='R$'
                        keyboardType='decimal-pad'
                        maxLength={7}
                        onChangeText={(n) => setValorP(Number(n))}
                    />
                </View>


                <View style={styles.qtd}>
                    <Text style={styles.txt}>
                        Quantidade:
                    </Text>

                    <View style={styles.qtdCount}>

                        <PopBtn func={() => { qtd > 1 ? setQtd(qtd - 1) : null }} />

                        <View style={styles.qtdBox}>
                            <Text>{qtd}</Text>
                        </View>

                        <AddBtn func={() => { setQtd(qtd + 1); }} />
                    </View>
                </View>

                {nomes.length > 0 ?

                    <View style={styles.names}>
                        <Text style={styles.txt}>
                            Pago por:
                        </Text>

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
                    :
                    <View style={styles.names}>
                        <Text style={styles.txt}>
                            Dividido por quantos?{`\n`}
                            <Text style={{ fontSize: 12 }}>
                                (contando com você)
                            </Text>
                        </Text>


                        <View style={styles.qtdCount}>

                            <PopBtn func={() => { qtdP > 1 ? setQtdP(qtdP - 1) : null }} />

                            <View style={styles.qtdBox}>
                                <Text>{qtdP}</Text>
                                <Image style={styles.img} source={user}></Image>
                            </View>

                            <AddBtn func={() => { setQtdP(qtdP + 1); }} />
                        </View>
                    </View>
                }
            </View>


            <View style={styles.btnContainer}>

                <AddBtn func={() => addProd()} />

                {produtos[0] ?
                    <PopBtn func={() => { produtos.pop(); stateProdutos([...produtos]); }} />
                    : null}
            </View>
        </>

    );
}