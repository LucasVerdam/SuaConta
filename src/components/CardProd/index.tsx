import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';


import { global } from '../../context/ContaContext';
import { styles } from './styles'


interface PModel {
    id: number;
    nome: string;
    qtd: number;
    valor: number;
    valorT: number;
    pessoas: string[];
}

export function CardProd() {

    const { produtos, stateProdutos } = global();
    const [prods, setProds] = useState([...produtos])

    function popP(P: PModel) {
        produtos.map((i) => {
            if (i.id == P.id) {
                produtos.splice(i.id, 1)
            }
        })
    }

    function setP(prod: any) {
        setProds(prod)
    }

    useEffect(() => {
        setP(produtos)
    }, [produtos])


    return (
        <>
            {produtos.length > 0 ?
                prods.map((i) => {
                    return (
                        <View key={i.nome} style={styles.container}>

                            <TouchableOpacity
                                onPress={() => {
                                    popP(i); stateProdutos([...produtos]);
                                }}
                                style={{
                                    height: 30,
                                    width: 30,
                                    borderRadius: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    right: -10,
                                    top: -10,
                                    backgroundColor: '#f45',

                                }}>
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

                            <View style={{ alignItems: 'center', marginTop: 15 }}>
                                <Text style={styles.title}>Pago por:</Text>

                                <ScrollView horizontal persistentScrollbar>

                                    {i.pessoas.map((i) => {

                                        return (
                                            <View key={i} style={styles.cardNames}>
                                                <Text>{i}</Text>
                                            </View>
                                        );
                                    })}

                                </ScrollView>
                            </View>


                        </View >
                    )
                })

                : null
            }
        </>


    );
}