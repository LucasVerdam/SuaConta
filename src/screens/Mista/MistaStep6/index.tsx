import React, { useState } from 'react';
import { Text, Alert } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { BackButton } from '../../../components/BackButton';
import { Encerra } from '../../../components/EncerraBtn';
import { Conta } from '../../../components/Conta';
import { SaveModal } from '../../../components/SaveModal';
import moment from 'moment';

import { useBackHandler } from '@react-native-community/hooks'

import { global } from '../../../context/ContaContext';
import { styles } from './styles';

export function MistaStep6({ navigation }: any) {

    const { nomes, produtos, valores, stateData } = global();

    const [saveModal, setSaveModal] = useState(false);

    useBackHandler(() => {
        if (nomes) {
            // handle it
            return true
        }
        // let the default thing happen
        return false
    })

    function zeraV() {
        nomes.map((i) => {
            nomes[i.id].dinheiro = 0
            nomes[i.id].troco = 0
        })

        valores.total = 0
        valores.valCard = 0
        valores.valDin = 0
        valores.trocoT = 0

        navigation.navigate('MistaStep5')
    }

    function end() {

        if (nomes.length > 0 || produtos.length > 0) {
            Alert.alert('Deseja salvar sua conta?', `Todos os dados serão apagados se não salvos!`, [
                {
                    text: 'Salvar',
                    onPress() {
                        setSaveModal(!saveModal)

                        let date = moment()
                            .utcOffset('-03:00')
                            .format('DD/MM/YYYY');

                        stateData(date);
                    }
                },
                {
                    text: 'Encerrar',
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
            backBtn={<BackButton onPress={() => { zeraV(); }} />}
            nextBtn={<Encerra onPress={() => { end(); }} />}
        >
            <>
                <Text style={styles.title}>Sua Conta</Text>

                <Conta />

                <SaveModal
                    nav={navigation}
                    modal={saveModal}
                    modalVis={setSaveModal}
                />
            </>
        </MainBg>
    );
}