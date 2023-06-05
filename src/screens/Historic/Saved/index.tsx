import React from 'react';
import { Text, Alert } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { Conta } from '../../../components/ContaSalva/Conta'

import { BackButton } from '../../../components/BackButton';
import { RemoveBtn } from '../../../components/RemoveBtn';

import { global } from '../../../context/ContaContext';
import { api } from '../../../services/api';

import { styles } from './styles';


export function Saved({ navigation }: any) {

    const { id, nome, data,
        stateId, stateNome, stateData,
        nomes, produtos, valores } = global();

    const dataBD = new Date(data)
    const dataString = dataBD.toLocaleDateString('pt-BR')

    function zeraV() {

        stateId(Number)
        stateNome('')
        stateData(new Date)

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

        navigation.navigate('Saves');

    }

    async function remove() {
        Alert.alert('Remover Conta do Histórico?', 'Contas removidas não poderão ser vistas novamente!', [
            {
                text: 'REMOVER',
                onPress() {

                    try {
                        api.delete(`/delete/${id}`)
                    } catch (error) {

                    }

                    navigation.navigate('Saves')
                }
            },
            {
                text: 'Manter',
                onPress() {
                    null
                }
            }
        ])

    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => zeraV()} />}
            nextBtn={<RemoveBtn onPress={() => { remove() }} />}
        >
            <>
                <Text style={styles.title}>
                    {nome} {'\n'}
                    <Text style={{ fontSize: 15 }}>
                        {dataString}
                    </Text>
                </Text>

                <Conta nomes={nomes} produtos={produtos} valores={valores} />
            </>
        </MainBg>
    );
}