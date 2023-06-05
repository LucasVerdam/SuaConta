import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';

interface Props {
    nomes: {
        id: number;
        nome: string;
        conta: number;
        dinheiro: number;
        troco: number;
        pgmtC: boolean;
        pgmtP: boolean;
    }[]
}

export function Integrantes({ nomes }: Props) {



    return (

        <View style={styles.integrantes}>

            <Text style={styles.txt1}>Integrantes</Text>


            <ScrollView>
                {nomes.map(item => {
                    return (

                        <View style={styles.conta} key={item.id}>
                            <View style={styles.nome}>
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.id + 1}.{item.nome}</Text>
                            </View>


                            <View style={styles.valores}>

                                <View style={styles.valor}>
                                    <Text style={styles.msg}>Total:</Text>
                                    <Text style={styles.val}>R${item.conta.toFixed(2)}</Text>
                                </View>


                                {item.pgmtC ?
                                    <Text style={styles.msg}>Pago no cartão.</Text>
                                    :
                                    item.dinheiro != 0 ?
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
                                        :
                                        <View style={styles.valor}>
                                            <Text style={styles.msg}>Pago com:   </Text>
                                            <Text style={styles.val}>Não informado.</Text>
                                        </View>


                                }

                            </View>

                        </View>
                    );
                })

                }

            </ScrollView>

        </View>

    );
}