import React, { useState } from 'react';
import { Alert, View, Text, ScrollView } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { BackButton } from '../../../components/BackButton';
import { ContaBtn } from '../../../components/ContaBtn';
import { TrocoInput } from '../../../components/TrocoInput';
import { PgmtC } from '../../../components/PgmtC';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';


export function MistaStep5({ navigation }: any) {

    const { nomes, valores } = global();

    const [key, setKey] = useState(0)

    function zeraV() {
        nomes.map(i => {
            nomes[i.id].dinheiro = 0
            nomes[i.id].troco = 0
        })

        navigation.navigate('MistaStep4');
    }

    function conta() {

        let x = false

        nomes.map(i => {
            if (i.dinheiro != 0 && i.dinheiro < i.conta) {
                Alert.alert('O valor pago não pode ser menor que a conta!', '', [
                    {
                        text: 'OK',
                        onPress() { }
                    }
                ])
                return x = true
            }
        })

        if (x) {
            null
        } else {
            nomes.map((i) => {
                valores.total += nomes[i.id].conta
            })

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
            navigation.navigate('MistaStep6');
        }
    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => { zeraV(); }} />}
            nextBtn={<ContaBtn onPress={() => { conta(); }} />}
        >
            <ScrollView>
                <Text style={styles.title}>Mista</Text>

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
        </MainBg>
    );
}