import React from 'react';
import { Text, View } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { BackButton } from '../../../components/BackButton';
import { NextButton } from '../../../components/NextButton';
import { Integrantes } from '../../../components/Integrantes';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';
import { Gastos } from '../../../components/Gastos';

export function MistaStep6({ navigation }: any) {

    const { nomes, produtos, valores } = global();

    function end() {
        while (nomes.length > 0) {
            nomes.pop();
        }

        while (produtos.length > 0) {
            produtos.pop();
        }

        valores.total = 0
        valores.valCard = 0
        valores.valDin = 0
        valores.trocoT = 0
    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => navigation.navigate('MistaStep5')} />}
            nextBtn={<NextButton onPress={() => { end(); navigation.navigate('Inicio') }} />}
        >
            <>
                <Text style={styles.title}>Sua Conta</Text>

                <View style={styles.container}>

                    <Integrantes />

                    {produtos.length > 0 ?
                        <Gastos />
                        :
                        null
                    }
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

                        <View>
                            <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '500' }}>
                                Valor pago:{' '}
                                <Text style={{ fontSize: 14 }}>
                                    R${(valores.valCard + valores.valDin).toFixed(2)}
                                </Text>
                            </Text>

                            <Text>No cartão: R${valores.valCard.toFixed(2)}</Text>
                            <Text>Em dinheiro: R${valores.valDin.toFixed(2)}</Text>

                        </View>


                        <View style={{ justifyContent: 'flex-end' }}>

                            <Text style={{ fontSize: 16 }}>
                                Troco total: R${valores.trocoT.toFixed(2)}
                            </Text>

                            <Text style={{ fontSize: 20, fontWeight: '500' }}>
                                Total: R${valores.total.toFixed(2)}
                            </Text>
                        </View>

                    </View>
                </View>
            </>
        </MainBg>
    );
}