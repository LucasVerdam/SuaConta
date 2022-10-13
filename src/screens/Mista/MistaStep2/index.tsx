import React from 'react';
import { Text, View, ScrollView } from 'react-native';

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
        nomes.map(i => nomes[i.id].pgmtP = false)

        while (produtos[0]) {
            produtos.pop();
        }
    }

    function somaV() {
        produtos.map((i) => {
            valores.total += i.valorT

        });

        nomes.map((i) => {
            produtos.map((p) => {
                if (p.pessoas.includes(i.nome)) {
                    nomes[i.id].conta += p.valorT / p.pessoas.length
                }
            })
        })

        console.log(nomes);
        console.log(' ');
        console.log(produtos);
        console.log(' ');
        console.log(valores);

    }


    return (

        <MainBg
            backBtn={<BackButton onPress={() => { zeraC(); navigation.navigate('MistaStep1') }} />}
            nextBtn={<NextButton onPress={() => { somaV(); navigation.navigate('MistaStep3') }} />}
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
