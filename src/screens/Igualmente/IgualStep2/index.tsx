import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';
import { MoneyInput } from '../../../components/MoneyInput';

import { global } from '../../../context/ContaContext';

import { styles } from './styles';


export function IgualStep2({ navigation }: any) {

    const { nomes, valores } = global()

    const [conta, setConta] = useState(0)
    const [gorj, setGorj] = useState(0)


    function div() {
        const gorjeta = conta * gorj / 100
        const total = Number(conta) + Number(gorjeta)

        valores.total = total

        nomes.map(i => i.conta = total / nomes.length)
    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => navigation.navigate('IgualStep1')} />}
            nextBtn={<NextButton onPress={() => { div(); navigation.navigate('IgualStep3') }} />}
        >

            <>
                <Text style={styles.title}>Igualmente</Text>

                <ScrollView>
                    <MoneyInput
                        text={`Quanto deu a conta?`}
                        placeholder='Total'
                        onChangeText={setConta}
                    />

                    <MoneyInput
                        text='Vai ter gorjeta?'
                        subText='Opcional'
                        placeholder='%'
                        maxLenght={2}
                        onChangeText={setGorj}
                    />
                </ScrollView>
            </>

        </MainBg>
    );
}




