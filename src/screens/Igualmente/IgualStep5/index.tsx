import React from 'react';
import { Text, View, ScrollView } from 'react-native';

// import IntInput from '../../components/IntInput';
import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';
import { Integrantes } from '../../../components/Integrantes';

import { global } from '../../../context/ContaContext';

import { styles } from './styles';

export function IgualStep5({ navigation }: any) {

    const { nomes, valores } = global()

    function end() {
        while (nomes.length > 0) {
            nomes.pop();
        }

        valores.valCard = 0
        valores.valDin = 0
        valores.trocoT = 0
    }

    function zeraV() {
        valores.valCard = 0
        valores.valDin = 0
        valores.trocoT = 0
    }
    return (

        <MainBg
            backBtn={<BackButton onPress={() => { zeraV(); navigation.navigate('IgualStep4') }} />}
            nextBtn={<NextButton onPress={() => { end(); navigation.navigate('Inicio') }} />}
        >
            <>
                <Text style={styles.title}>Sua Conta</Text>



                <View style={styles.container}>

                    <Integrantes />

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


                        <View style={{ justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: 20, fontWeight: '500' }}>
                                Total: R${valores.total.toFixed(2)}
                            </Text>


                            <Text style={{ fontSize: 16 }}>
                                Troco total: R${valores.trocoT.toFixed(2)}
                            </Text>
                        </View>

                    </View>
                </View>
            </>
        </MainBg >

    );
}


