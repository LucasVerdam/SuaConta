import React, { useState } from 'react';
import { Text, Alert } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { BackButton } from '../../../components/BackButton';
import { MoneyInput } from '../../../components/MoneyInput';
import { NextButton } from '../../../components/NextButton';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';

export function IndivStep2({ navigation }: any) {

    const { valores } = global()
    const [gorj, setGorj] = useState(0)
    const [key, setKey] = useState(0)

    function zeraV() {
        setGorj(0)

        valores.total = 0

        navigation.navigate('IndivStep1')
    }

    function addGorj() {

        const valG = gorj / 100

        valores.total += valores.total * valG

        navigation.navigate('IndivStep3');

        setTimeout(() => {
            setGorj(0);
            setKey(key + 1);
        }, 500)
    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => { zeraV(); }} />}
            nextBtn={<NextButton onPress={() => { addGorj(); }} />}
        >

            <>
                <Text style={styles.title}>Individual</Text>

                <MoneyInput
                    k={key}
                    text={`Vai ter gorjeta?                  R$${valores.total.toFixed(2)}  x`}
                    subText='Opcional'
                    placeholder='%'
                    maxLenght={2}
                    onChangeText={setGorj}
                />
            </>

        </MainBg>
    );
}