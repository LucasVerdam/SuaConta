import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { BackButton } from '../../../components/BackButton';
import { NextButton } from '../../../components/NextButton';
import { ITrocoInput } from '../../../components/ITrocoInput';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';

export function IndivStep3({ navigation }: any) {

    const { produtos, valores, stateValores } = global()

    const [key, setKey] = useState(0);

    function zeraV() {
        valores.total = 0
        produtos.map((p) => {
            valores.total += (p.valorT / p.qtdPessoas)
        })
        stateValores({ ...valores })

        navigation.navigate('IndivStep2')
    }

    function valorT() {
        valores.trocoT = valores.valDin - valores.total

        setKey(key + 1)

        navigation.navigate('IndivStep4');
    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => { zeraV() }} />}
            nextBtn={<NextButton onPress={() => { valorT() }} />}
        >
            <>
                <Text style={styles.title}>Mista</Text>

                <Text style={styles.txt}>Valor que será pago em dinheiro:</Text>
                <Text style={styles.txt2}>(se for em dinheiro)</Text>

                <View style={{ marginVertical: 10 }}>
                    <ITrocoInput key={key} />
                </View>
            </>

        </MainBg>
    );
}