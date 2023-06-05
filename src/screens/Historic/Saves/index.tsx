import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { MainBg } from '../../../components/MainBg';
import { ContaSalva } from '../../../components/ContaSalvaBtn';
import { BackButton } from '../../../components/BackButton';

import { api } from '../../../services/api';
import { global } from '../../../context/ContaContext';

import { styles } from './styles';


interface Conta {
    id: number;
    nome: string;
    data: Date;
}

export function Saves({ navigation }: any) {

    const [contas, setContas] = useState<Conta[]>([]);

    const { id } = global();

    async function loadContas() {

        try {
            const cts = await api.get('/contas')

            setContas(cts.data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadContas()
    }, [contas])


    return (
        <MainBg
            backBtn={<BackButton onPress={() => navigation.navigate('Inicio')} />}
        >
            <>
                <Text style={styles.title}>Histórico</Text>

                <ScrollView>
                    <View style={styles.container}>
                        {
                            contas.map((conta) => {
                                return (
                                    <ContaSalva
                                        key={conta.id}
                                        id={conta.id}
                                        name={conta.nome}
                                        date={conta.data}
                                        nav={navigation} />
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </>
        </MainBg>
    );
}