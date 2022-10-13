import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { global } from '../../context/ContaContext';

import { styles } from './styles';

export function Gastos() {

    const { produtos } = global()

    return (

        <View style={styles.gastos}>

            <Text style={styles.txt1}>Gastos</Text>


            <ScrollView>
                {produtos.map(item => {
                    return (

                        <View style={styles.conta} key={item.id}>
                            <View style={styles.nome}>
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.id + 1}.{item.nome}</Text>
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
                                    <Text style={styles.val}>{item.pessoas.length}</Text>
                                </View>

                                {/* {item.pgmtC ?
                                    <Text style={styles.msg}>Pago no cartão.</Text>
                                    :
                                    <>
                                        <View style={styles.valor}>
                                            <Text style={styles.msg}>Pago com:   </Text>
                                            <Text style={styles.val}>R${item.dinheiro.toFixed(2)}</Text>
                                        </View>

                                        <View style={styles.valor}>
                                            <Text style={styles.msg}>Troco:</Text>
                                            <Text style={styles.val}>R${item.troco.toFixed(2)}</Text>
                                        </View>
                                    </>
                                } */}

                            </View>

                        </View>
                    );
                })

                }

            </ScrollView>

        </View>

    );
}