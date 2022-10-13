import React, { useState } from 'react';
import { Text } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';


import { global } from '../../../context/ContaContext';
import { styles } from './styles';
import { MoneyInput } from '../../../components/MoneyInput';


export function MistaStep3({ navigation }: any) {

    const { nomes, produtos, valores } = global()
    const [gorj, setGorj] = useState(0)


    function addGorj() {

        const valG = gorj / 100

        valores.total += valores.total * valG

        produtos.map((i) => {
            i.valorT += i.valorT * valG
        })

        nomes.map((i) => {
            i.conta += i.conta * valG
        })
    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => navigation.navigate('MistaStep2')} />}
            nextBtn={<NextButton onPress={() => { addGorj(); navigation.navigate('MistaStep4') }} />}
        >

            <>
                <Text style={styles.title}>Mista</Text>

                <MoneyInput
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
