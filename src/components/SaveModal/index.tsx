import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { ContaInput } from '../NomeContaInput';
import { ContaBtn } from '../ContaBtn';
import { Encerra } from '../EncerraBtn';

import { api } from '../../services/api';
import { global } from '../../context/ContaContext';

import { styles } from './styles';

interface Props {
    nav: any;
    modal: boolean;
    modalVis: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SaveModal({ nav, modal, modalVis }: Props) {

    const {
        nome, data,
        stateNome, stateData,
        nomes, produtos, valores } = global();


    function cancel() {
        stateNome('');
        stateData(new Date);
        modalVis(!modal);
    }

    async function save() {

        if (nome.length < 2) {
            Alert.alert('Atenção!', 'O nome da conta deve conter ao menos 2 caracteres e no máximo 16.', [
                {
                    text: 'OK',
                    onPress() {
                        null
                    }
                }
            ])
        } else {

            try {
                const conta = await api.post('/save', {
                    nome,
                    data,
                    nomes,
                    produtos,
                    valores
                })

                console.log(conta.data);

                nav.navigate('Inicio');

                cancel();

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

            } catch (error) {
                console.log(error);

            }
        }

    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                modalVis(!modal);
            }}>

            <TouchableWithoutFeedback onPress={() => cancel()}>
                <View style={styles.modalBg}></View>
            </TouchableWithoutFeedback>

            <View style={styles.container}>

                <View style={styles.title}>
                    <Text style={styles.txt1}>Salvar</Text>
                </View>

                <View style={styles.txt2Box}>
                    <Text style={styles.txt2}>Contas salvas podem ser vistas{'\n'} novamente no Histórico.</Text>
                </View>

                <ContaInput onChange={stateNome} />

                <View style={styles.btns}>
                    <Encerra text={'Cancelar'} onPress={() => cancel()} />
                    <ContaBtn text={'Salvar'} onPress={() => save()} />
                </View>

            </View>

        </Modal >
    );
}