import React from 'react';
import { Text } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { BackButton } from '../../../components/BackButton';
import { NextButton } from '../../../components/NextButton';
import { Conta } from '../../../components/Conta';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';

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

    function zeraV() {
        nomes.map((i) => {
            nomes[i.id].dinheiro = 0
            nomes[i.id].troco = 0
        })

        valores.total = 0
        valores.valCard = 0
        valores.valDin = 0
        valores.trocoT = 0
    }


    return (
        <MainBg
            backBtn={<BackButton onPress={() => { zeraV(); navigation.navigate('MistaStep5') }} />}
            nextBtn={<NextButton onPress={() => { end(); navigation.navigate('Inicio') }} />}
        >
            <>
                <Text style={styles.title}>Sua Conta</Text>

                <Conta />
            </>
        </MainBg>
    );
}