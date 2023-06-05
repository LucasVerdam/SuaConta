import React, { useState } from 'react';
import { Alert, Text } from 'react-native';

import { Conta } from '../../../components/Conta';
import { MainBg } from '../../../components/MainBg';
import { BackButton } from '../../../components/BackButton';
import { Encerra } from '../../../components/EncerraBtn';
import moment from 'moment';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';
import { SaveModal } from '../../../components/SaveModal';


export function IndivStep4({ navigation }: any) {

    const { nomes, produtos, valores, stateData } = global();

    const [saveModal, setSaveModal] = useState(false);

    function zeraVDin() {
        valores.valDin = 0
        navigation.navigate('IndivStep3');
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
            backBtn={<BackButton onPress={() => { zeraVDin() }} />}
            nextBtn={<Encerra onPress={() => { end() }} />}
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