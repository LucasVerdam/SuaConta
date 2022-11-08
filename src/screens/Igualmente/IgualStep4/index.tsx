import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';
import { TrocoInput } from '../../../components/TrocoInput';
import { PgmtC } from '../../../components/PgmtC';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';


export function IgualStep4({ navigation }: any) {

    const { nomes, valores } = global()

    const [key, setKey] = useState(0)

    function zeraV() {
        nomes.map(i => {
            nomes[i.id].dinheiro = 0
            nomes[i.id].troco = 0
        })
    }

    function conta() {
        //troco
        nomes.map(i => {
            if (nomes[i.id].pgmtC == false && nomes[i.id].dinheiro != 0) {
                nomes[i.id].troco = nomes[i.id].dinheiro - nomes[i.id].conta
                valores.trocoT += nomes[i.id].troco
            }
        })

        //total no cartão else total no dinheiro
        nomes.map(i => {
            if (nomes[i.id].pgmtC == true) {
                valores.valCard += nomes[i.id].conta
            } else {
                valores.valDin += nomes[i.id].dinheiro
            }
        })

        setKey(key + 1)
    }

    return (

        <MainBg
            backBtn={<BackButton onPress={() => { zeraV(); navigation.navigate('IgualStep3'); }} />}
            nextBtn={<NextButton onPress={() => { conta(); navigation.navigate('IgualStep5'); }} />}
        >

            <ScrollView>
                <Text style={styles.title}>Igualmente</Text>

                <Text style={styles.txt}>Valor que será pago em dinheiro:</Text>

                <View style={{ marginVertical: 10 }}>
                    {nomes.map(i => {
                        if (nomes[i.id].pgmtC == false) {

                            return (
                                <TrocoInput
                                    key={i.id}
                                    k={key}
                                    id={nomes[i.id].id}
                                    nome={nomes[i.id].nome}
                                    conta={nomes[i.id].conta}
                                />
                            );

                        } else {

                            return (
                                <PgmtC
                                    key={i.id}
                                    id={nomes[i.id].id}
                                    nome={nomes[i.id].nome}
                                    conta={nomes[i.id].conta}
                                />
                            )
                        }
                    })}
                </View>

            </ScrollView>
        </MainBg >

    );
}


