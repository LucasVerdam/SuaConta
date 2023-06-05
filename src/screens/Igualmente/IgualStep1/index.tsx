import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Modal, TouchableWithoutFeedback, BackHandler, Keyboard } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { Encerra } from '../../../components/EncerraBtn';
import { NamesInput } from '../../../components/NamesInput';
import { ContactsBtn } from '../../../components/ContactsBtn';
import { ContModal } from '../../../components/ContactsModal';


import { useBackHandler } from '@react-native-community/hooks';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';


export function IgualStep1({ navigation }: any) {

    const { nomes, produtos, valores } = global()

    /*     const [modalVis, setModalVis] = useState(false)
     */

    useBackHandler(() => {
        return true
    })

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

                <NamesInput />
            </>
            {/* <ContModal modal={modalVis} modalVis={setModalVis} />

                <ContactsBtn modal={modalVis} setModal={setModalVis} /> */}
        </MainBg >

    );
}


