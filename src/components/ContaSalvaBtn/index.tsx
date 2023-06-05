import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { api } from '../../services/api';
import { global } from '../../context/ContaContext';

import { styles } from './styles';

interface Props {
    id: number;
    nav: any;
    name: string;
    date: any;
}

type Nomes = {
    nomes: {
        id: number;
        nome: string;
        conta: number;
        dinheiro: number;
        troco: number;
        pgmtC: boolean;
        pgmtP: boolean;
    }[]
}

type Produtos = {
    produtos: {
        id: number;
        nome: string;
        valor: number;
        qtd: number;
        valorT: number;
        pessoas: string[];
        qtdPessoas: number;
    }[]
}

type Valores = {
    valores: {
        valCard: number;
        valDin: number;
        total: number;
        trocoT: number;
    }
}

export function ContaSalva({ id, nav, name, date }: Props) {

    const { stateNome, stateData, stateNomes, stateValores, stateProdutos, stateId } = global();

    const dataBD = new Date(date)
    const dataString = dataBD.toLocaleDateString('pt-Br')

    async function getConta(id: number) {

        try {
            const conta = await api.get(`/conta/${id}`);

            const dados = conta.data[0]

            stateId(dados.id)
            stateNome(dados.nome);
            stateData(dados.data);
            stateNomes(dados.nomes);
            stateProdutos(dados.produtos);
            stateValores(dados.valores);

            console.log(dados);

            nav.navigate('Saved');

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <TouchableOpacity
            style={styles.conta}
            onPress={() => getConta(id)}
        >
            <Text style={styles.contaName}>
                {name}
            </Text>
            <Text style={styles.contaDate}>
                {dataString}
            </Text>
        </TouchableOpacity>

    );
}