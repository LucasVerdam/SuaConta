import React from 'react';
import { Text, View, Alert, ScrollView } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';
import { ProdInput } from '../../../components/ProdMInput';
import { CardProd } from '../../../components/CardProd';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';


export function MistaStep2({ navigation }: any) {

    const { nomes, produtos, valores } = global()


    function zeraC() {

        if (produtos.length > 0) {
            Alert.alert('Manter produtos?', 'SIM irá manter os produtos / NÃO irá remove-los.', [
                {
                    text: 'Sim',
                    onPress() {
                        nomes.map((i) => nomes[i.id].pgmtP = false);
                        navigation.navigate('MistaStep1')
                    }
                },
                {
                    text: 'Não',
                    onPress() {
                        nomes.map((i) => nomes[i.id].pgmtP = false)

                        while (produtos[0]) {
                            produtos.pop();
                        }
                        navigation.navigate('MistaStep1');
                    }
                }
            ])
        } else {
            navigation.navigate('MistaStep1')
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
            nomes.map((i) => {
                produtos.map((p) => {
                    if (p.pessoas.includes(i.nome)) {
                        nomes[i.id].conta += p.valorT / p.pessoas.length
                    }
                })
            });

            navigation.navigate('MistaStep3');
        }


        console.log(nomes);
        console.log(' ');
        console.log(produtos);
        console.log(' ');
        console.log(valores);

    }


    return (

        <MainBg
            backBtn={<BackButton onPress={() => { zeraC(); }} />}
            nextBtn={<NextButton onPress={() => { somaV(); }} />}
        >
            <ScrollView>
                <Text style={styles.title}>Mista</Text>

                <Text style={styles.txt}>Informe os gastos:</Text>

                <View style={{ marginVertical: 10 }}>
                    <CardProd />

                    <ProdInput />
                </View>

            </ScrollView>
        </MainBg >

    );
}
