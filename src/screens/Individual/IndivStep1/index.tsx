import React, { useState } from 'react';
import { Text } from 'react-native';

// import IntInput from '../../components/IntInput';
import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';


import { styles } from './styles';
import { MoneyInput } from '../../../components/MoneyInput';

export function IndivStep1({ navigation }: any) {

    const [num, setNum] = useState(0)

    return (

        <MainBg
            nextBtn={<NextButton onPress={() => { navigation.navigate('') }} />}
            backBtn={<BackButton onPress={() => { navigation.navigate('Inicio') }} />}
        >
            <>
                <Text style={styles.title}>Individual</Text>

                <MoneyInput
                    text={`Quanto deu a conta? ${num}`}
                    placeholder='Total'
                    onChangeText={setNum}
                />

            </>
        </MainBg >

    );
}


