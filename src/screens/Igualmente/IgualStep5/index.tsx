import React, { useState } from 'react';
import { Text, Alert } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { BackButton } from '../../../components/BackButton';
import { Encerra } from '../../../components/EncerraBtn';
import { Conta } from '../../../components/Conta';
import { SaveModal } from '../../../components/SaveModal';

import moment from 'moment';
import { global } from '../../../context/ContaContext';

import { styles } from './styles';


export function IgualStep5({ navigation }: any) {

    const { stateData, nomes, produtos, valores } = global();

    const [saveModal, setSaveModal] = useState(false);


    function zeraV() {
        nomes.map((i) => {
            nomes[i.id].dinheiro = 0
            nomes[i.id].troco = 0
        })

        valores.valCard = 0
        valores.valDin = 0
        valores.trocoT = 0

        navigation.navigate('IgualStep4')
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
        </MainBg >

    );
}


