import React from 'react';
import { Text } from 'react-native';

// import IntInput from '../../components/IntInput';
import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';

import { global } from '../../../context/NomeContext';

import { styles } from './styles';

export function IgualStep5({ navigation }: any) {

    const { nomes } = global()

    function end() {
        while (nomes.length > 0) {
            nomes.pop();
        }
    }

    return (

        <MainBg
            backBtn={<BackButton onPress={() => { navigation.navigate('IgualStep4') }} />}
            nextBtn={<NextButton onPress={() => { navigation.navigate('Inicio'); end() }} />}
        >
            <>
                <Text style={styles.title}>Igualmente final</Text>


            </>
        </MainBg >

    );
}


