import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';

// import IntInput from '../../components/IntInput';
import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';

import { global } from '../../../context/NomeContext';

import { styles } from './styles';
import { TrocoInput } from '../../../components/TrocoInput';

export function IgualStep4({ navigation }: any) {

    const { nomes } = global()
    const [valord, setValord] = useState(0)

    return (

        <MainBg
            backBtn={<BackButton onPress={() => { navigation.navigate('IgualStep3') }} />}
            nextBtn={<NextButton onPress={() => {
                navigation.navigate('IgualStep5'); console.warn(nomes);
            }} />}
        >
            <>
                <ScrollView>
                    <Text style={styles.title}>Igualmente</Text>

                    <Text style={styles.txt}>Valor que será pago em dinheiro:</Text>
                    <Text style={styles.subTxt}>Opcional<Text style={{ fontSize: 12 }}>(Para cálculo do troco)</Text></Text>

                    <TrocoInput onChangeText={setValord} />
                </ScrollView>
            </>
        </MainBg >

    );
}


