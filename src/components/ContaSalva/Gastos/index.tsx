import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import user from '../../../assets/user.png'

import { styles } from './styles';

interface Props {
    produtos: {
        id: number;
        nome: string;
        valor: number;
        qtd: number;
        valorT: number;
        pessoas: string[];
        qtdPessoas: number;
    }[]
}

export function Gastos({ produtos }: Props) {

    return (
        <View style={styles.gastos}>

            <Text style={styles.txt1}>Gastos</Text>


            <ScrollView>
                {produtos.map(item => {
                    return (

                        <View style={styles.conta} key={item.id}>
                            <View style={styles.nome}>
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>{produtos.indexOf(item) + 1}.{item.nome}</Text>
                            </View>


                            <View style={styles.valores}>


                                <View style={styles.valor}>
                                    <Text style={styles.msg}>Valor unitário:</Text>
                                    <Text style={styles.val}>R${item.valor.toFixed(2)}</Text>
                                </View>

                                <View style={styles.valor}>
                                    <Text style={styles.msg}>Quantidade:</Text>
                                    <Text style={styles.val}>x{item.qtd}</Text>
                                </View>

                                <View style={styles.valor}>
                                    <Text style={styles.msg}>Total:</Text>
                                    <Text style={styles.val}>R${item.valorT.toFixed(2)}</Text>
                                </View>

                                <View style={styles.valor}>
                                    <Text style={styles.msg}>Dividido por:</Text>
                                    <Text style={styles.val}>{item.pessoas.length || item.qtdPessoas}</Text>

                                    <View style={styles.imgCont}>
                                        <Image style={styles.img} source={user}></Image>
                                    </View>
                                </View>

                            </View>

                        </View>
                    );
                })

                }

            </ScrollView>

        </View>
    );
}