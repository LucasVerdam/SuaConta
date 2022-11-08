import React from 'react';
import { Text } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';
import { Conta } from '../../../components/Conta';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';


export function IgualStep5({ navigation }: any) {

    const { nomes, valores } = global()

    function end() {
        while (nomes.length > 0) {
            nomes.pop();
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

                <Conta />
            </>
        </MainBg >

    );
}


