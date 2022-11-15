import React from 'react';
import { ScrollView, Text, View, Alert } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { Encerra } from '../../../components/EncerraBtn';
import { NextButton } from '../../../components/NextButton';
import { CardProd } from '../../../components/CardProd';
import { ProdInput } from '../../../components/ProdInput';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';


export function IndivStep1({ navigation }: any) {

    const { nomes, valores, produtos } = global();

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

    function somaV() {

        if (produtos.length == 0) {
            Alert.alert('Nenhum produto!', 'Deve-se adicionar ao menos 1 produto.', [
                {
                    text: 'OK',
                    onPress() { }
                },
            ])
        } else {

            produtos.map((p) => {
                valores.total += (p.valorT / p.qtdPessoas)
            })
            navigation.navigate('IndivStep2');
        }

        console.log(produtos);
        console.log(' ');
        console.log(valores);

    }

    return (

        <MainBg
            backBtn={<Encerra onPress={() => { end(); }} />}
            nextBtn={<NextButton onPress={() => { somaV(); }} />}
        >

            <ScrollView>
                <Text style={styles.title}>Individual</Text>

                <Text style={styles.txt}>Informe os gastos:</Text>

                <View style={{ marginVertical: 10 }}>
                    <CardProd />

                    <ProdInput />
                </View>

            </ScrollView>
        </MainBg >

    );
}


