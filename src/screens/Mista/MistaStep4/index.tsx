import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { BackButton } from '../../../components/BackButton';
import { CardName } from '../../../components/CardName';
import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';


export function MistaStep4({ navigation }: any) {

    const { nomes, produtos, valores } = global();

    function zeraC() {
        nomes.map((i) => {
            nomes[i.id].conta = 0
            nomes[i.id].pgmtC = false
        })

        nomes.map((i) => {
            produtos.map((p) => {
                if (p.pessoas.includes(i.nome)) {
                    nomes[i.id].conta += p.valorT / p.pessoas.length
                }
            })
        })

        valores.total = 0
    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => { zeraC(); navigation.navigate('MistaStep3') }} />}
            nextBtn={<NextButton onPress={() => { navigation.navigate('MistaStep5') }} />}
        >
            <>
                <Text style={styles.title}>Mista</Text>

                <Text style={styles.txt}>Alguém vai pagar no cartão?</Text>
                <Text style={styles.subTxt}>Selecione os nomes:</Text>

                <ScrollView>
                    <View style={styles.container}>
                        {nomes.map(i =>
                            <CardName
                                id={i.id}
                                key={i.id}
                                nome={i.nome}
                            />
                        )}
                    </View>
                </ScrollView>
            </>
        </MainBg>
    );
}