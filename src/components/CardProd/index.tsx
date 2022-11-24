import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image } from 'react-native';

import user from '../../assets/user.png'

import { global } from '../../context/ContaContext';
import { styles } from './styles'


interface PModel {
    id: number;
    nome: string;
    qtd: number;
    valor: number;
    valorT: number;
    pessoas: string[];
    qtdPessoas: number;
}

export function CardProd() {

    const { produtos, stateProdutos } = global();
    const [prods, setProds] = useState([...produtos])


    function popP(i: PModel) {
        produtos.splice(produtos.indexOf(i), 1);
        stateProdutos([...produtos])
    }

    useEffect(() => {
        setProds([...produtos])
    }, [produtos])


    return (
        <>
            {produtos.length > 0 ?
                prods.map((i) => {
                    return (
                        <View key={i.id} style={styles.container}>

                            <TouchableOpacity
                                onPress={() => { popP(i); }}
                                style={styles.popBtn}>

                                <Text style={{ fontSize: 16, color: '#fff' }}>X</Text>

                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <View>
                                    <Text style={styles.title}>Produto</Text>
                                    <Text style={styles.nomeP}>{i.nome}</Text>
                                </View>


                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={styles.title}>Valor unitário</Text>

                                    <Text style={styles.nomeP}>R${i.valor.toFixed(2)}</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.title}>Qtd</Text>

                                    <Text style={styles.nomeP}>{i.qtd}x</Text>
                                </View>

                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={styles.title}>Valor Total</Text>

                                    <Text style={styles.nomeP}>R${i.valorT.toFixed(2)}</Text>
                                </View>
                            </View>


                            {i.pessoas.length > 0 ?

                                <View style={{ alignItems: 'center', marginTop: 15 }}>
                                    <Text style={styles.title}>Pago por:</Text>

                                    <ScrollView horizontal persistentScrollbar>
                                        {i.pessoas.map((p) => {

                                            return (
                                                <View key={p} style={styles.cardNames}>
                                                    <Text>{p}</Text>
                                                </View>
                                            );
                                        })}
                                    </ScrollView>
                                </View>
                                :
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                                    <Text style={styles.title}>Dividido por:  </Text>


                                    <Text style={{ fontSize: 19 }}>{i.qtdPessoas} </Text>
                                    <Image style={styles.img} source={user}></Image>
                                </View>
                            }
                        </View >
                    )
                })

                : null
            }
        </>


    );
}