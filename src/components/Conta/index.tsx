import React from 'react';
import { View, Text } from 'react-native';

import { Integrantes } from '../Integrantes';
import { Gastos } from '../Gastos';

import { global } from '../../context/ContaContext';
import { styles } from './styles';

export function Conta() {

    const { produtos, valores } = global();

    return (
        <View style={styles.container}>

            <Integrantes />

            {produtos.length > 0 ?
                <Gastos />
                :
                null
            }

            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

                {valores.valDin == 0 ?
                    <View>

                    </View>
                    :
                    <View>
                        <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '500' }}>
                            Valor pago:{' '}
                            <Text style={{ fontSize: 14 }}>
                                R${(valores.valCard + valores.valDin).toFixed(2)}
                            </Text>
                        </Text>

                        <Text>Em dinheiro: R${valores.valDin.toFixed(2)}</Text>
                        <Text>No cartão: R${valores.valCard.toFixed(2)}</Text>
                    </View>
                }

                <View style={{ justifyContent: 'flex-end' }}>

                    <Text style={{ fontSize: 20, fontWeight: '500' }}>
                        Total: R${valores.total.toFixed(2)}
                    </Text>

                    {valores.trocoT > 0 ?
                        <Text style={{ fontSize: 14 }}>
                            Troco total: R${valores.trocoT.toFixed(2)}
                        </Text>
                        :
                        null}

                </View>

            </View>
        </View>
    );
}