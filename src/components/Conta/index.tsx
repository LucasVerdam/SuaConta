import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Integrantes } from '../Integrantes';
import { Gastos } from '../Gastos';

import { global } from '../../context/ContaContext';
import { styles } from './styles';

export function Conta() {

    const { nomes, produtos, valores } = global();

    return (
        <View style={styles.container}>

            <ScrollView
                persistentScrollbar
                horizontal
                style={{ marginRight: 10, }}
            >

                {nomes.length > 0 ?
                    <Integrantes />
                    :
                    null
                }

                {produtos.length > 0 ?
                    <Gastos />
                    :
                    null
                }
            </ScrollView>

            <View style={styles.valores}>

                {valores.valDin == 0 && valores.valCard == 0 ?
                    <View></View>
                    :
                    <View>
                        <Text style={styles.textValorP}>
                            Valor pago:{' '}
                            <Text style={styles.valorP}>
                                R${(valores.valCard + valores.valDin).toFixed(2)}
                            </Text>
                        </Text>

                        {valores.valCard > 0 ?
                            <>
                                <Text>Em dinheiro: R${valores.valDin.toFixed(2)}</Text>
                                <Text>No cartão: R${valores.valCard.toFixed(2)}</Text>
                            </>
                            :
                            <Text>Em dinheiro</Text>
                        }
                    </View>
                }


                {nomes.length == 0 ?

                    <View style={styles.totais}>

                        <Text style={styles.total}>
                            Sua parte: R${valores.total.toFixed(2)}
                        </Text>

                        {valores.trocoT > 0 ?
                            <Text style={styles.trocoTotal}>
                                Seu troco: R${valores.trocoT.toFixed(2)}
                            </Text>
                            :
                            null}

                    </View>
                    :
                    <View style={styles.totais}>

                        <Text style={styles.total}>
                            Total: R${valores.total.toFixed(2)}
                        </Text>

                        {valores.trocoT > 0 ?
                            <Text style={styles.trocoTotal}>
                                Troco total: R${valores.trocoT.toFixed(2)}
                            </Text>
                            :
                            null}

                    </View>
                }
            </View>
        </View>
    );
}