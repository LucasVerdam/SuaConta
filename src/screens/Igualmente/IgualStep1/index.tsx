import React from 'react';
import { Text, Alert, ScrollView } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';
import { NamesInput } from '../../../components/NamesInput';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';
import { Encerra } from '../../../components/EncerraBtn';

export function IgualStep1({ navigation }: any) {

    const { nomes } = global()

    function end() {

        if (nomes.length > 0) {
            Alert.alert('Cancelar conta?', 'Todos os dados serão apagados.', [
                {
                    text: 'Sim',
                    onPress() {
                        while (nomes.length > 0) {
                            nomes.pop();
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
            while (nomes.length > 0) {
                nomes.pop();
            }
            navigation.navigate('Inicio');
        }

    }

    function nextStep() {
        nomes.length > 1 ?
            navigation.navigate('IgualStep2')
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
                <Text style={styles.title}>Igualmente</Text>
                <ScrollView>
                    <NamesInput />
                </ScrollView>
            </>
        </MainBg >

    );
}


