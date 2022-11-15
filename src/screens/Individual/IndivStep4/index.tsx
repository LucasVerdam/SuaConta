import React from 'react';
import { Alert, Text } from 'react-native';

import { Conta } from '../../../components/Conta';
import { MainBg } from '../../../components/MainBg';
import { BackButton } from '../../../components/BackButton';
import { NextButton } from '../../../components/NextButton';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';


export function IndivStep4({ navigation }: any) {

    const { nomes, produtos, valores } = global();

    function zeraVDin() {
        valores.valDin = 0
        navigation.navigate('IndivStep3');
    }


    function end() {

        if (nomes.length > 0 || produtos.length > 0) {
            Alert.alert('Cancelar conta?', 'Todos os dados serão apagados.', [
                {
                    text: 'Sim',
                    onPress() {
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

                        navigation.navigate('Inicio');
                    }
                },
                {
                    text: 'Não',
                    onPress() {
                        null
                    }
                }
            ])
        } else {
            while (produtos.length > 0) {
                produtos.pop();
            }
            valores.total = 0
            valores.valCard = 0
            valores.valDin = 0
            valores.trocoT = 0

            navigation.navigate('Inicio');
        }

    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => { zeraVDin() }} />}
            nextBtn={<NextButton onPress={() => { end() }} />}
        >
            <>
                <Text style={styles.title}>Sua Conta</Text>

                <Conta />
            </>

        </MainBg>
    );
}