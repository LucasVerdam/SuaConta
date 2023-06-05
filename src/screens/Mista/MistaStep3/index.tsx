import React, { useState } from 'react';
import { Text } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';
import { MoneyInput } from '../../../components/MoneyInput';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';


export function MistaStep3({ navigation }: any) {

    const { nomes, valores } = global()
    const [gorj, setGorj] = useState(0)
    const [key, setKey] = useState(0)


    function addGorj() {

        const valG = gorj / 100

        valores.total += valores.total * valG

        nomes.map((i) => {
            i.conta += i.conta * valG
        })

        setTimeout(() => {
            setGorj(0);
            setKey(key + 1);
        }, 500)
    }

    function zeraV() {
        nomes.map((i) => {
            nomes[i.id].conta = 0
        })

        valores.total = 0
        setGorj(0)
    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => { zeraV(); navigation.navigate('MistaStep2') }} />}
            nextBtn={<NextButton onPress={() => { addGorj(); navigation.navigate('MistaStep4'); }} />}
        >

            <>
                <Text style={styles.title}>Mista</Text>

                <MoneyInput
                    k={key}
                    text='Vai ter gorjeta?'
                    subText='Opcional'
                    placeholder='%'
                    maxLenght={2}
                    onChangeText={setGorj}
                />
            </>

        </MainBg>
    );
}
