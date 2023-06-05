import React, { useState } from 'react';
import { Alert, Text, ScrollView } from 'react-native';

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
    const [key, setKey] = useState(0)

    function div() {

        if (conta == 0) {
            Alert.alert('Informe o valor da conta!', '', [
                {
                    text: 'OK',
                    onPress() { }
                },
            ])
        } else {

            const gorjeta = conta * gorj / 100
            const total = Number(conta) + Number(gorjeta)

            valores.total = total

            nomes.map((i) => i.conta = total / nomes.length)

            setConta(0)
            setGorj(0)

            setTimeout(() => {
                setKey(key + 1)
            }, 500)

            navigation.navigate('IgualStep3')
        }

    }

    return (
        <MainBg
            backBtn={<BackButton onPress={() => navigation.navigate('IgualStep1')} />}
            nextBtn={<NextButton onPress={() => { div(); }} />}
        >

            <>
                <Text style={styles.title}>Igualmente</Text>

                <ScrollView>
                    <MoneyInput
                        k={key}
                        text={`Quanto deu a conta?`}
                        placeholder='Total'
                        onChangeText={setConta}
                    />

                    <MoneyInput
                        k={key}
                        text={'Vai ter gorjeta?'}
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




