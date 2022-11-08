import React from 'react';
import { Text, Alert, ScrollView } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { Encerra } from '../../../components/EncerraBtn';
import { NamesInput } from '../../../components/NamesInput';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';


export function MistaStep1({ navigation }: any) {

    const { nomes, produtos } = global();

    function end() {

        if (nomes.length > 0) {
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
            navigation.navigate('Inicio');
        }

    }

    function nextStep() {
        nomes.length > 1 ?
            navigation.navigate('MistaStep2')
            :
            Alert.alert('Integrantes insuficientes!', 'Deve-se adicionar ao menos 2.', [
                {
                    text: 'OK',
                    onPress() {
                        null
                    }
                }
            ])
    }

    return (

        <MainBg
            backBtn={<Encerra onPress={() => { end() }} />}
            nextBtn={<NextButton onPress={() => { nextStep() }} />}
        >
            <>
                <Text style={styles.title}>Mista</Text>
                <ScrollView>
                    <NamesInput />
                </ScrollView>
            </>

        </MainBg >

    );
}
