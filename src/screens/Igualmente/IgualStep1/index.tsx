import React from 'react';
import { Text } from 'react-native';

// import IntInput from '../../components/IntInput';
import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';
import { NamesInput } from '../../../components/NamesInput';

import { global } from '../../../context/NomeContext';

import { styles } from './styles';

export function IgualStep1({ navigation }: any) {

    const { nomes } = global()

    function end() {
        while (nomes.length > 0) {
            nomes.pop();
        }
    }

    return (

        <MainBg
            backBtn={<BackButton onPress={() => { navigation.navigate('Inicio'); end() }} />}
            nextBtn={<NextButton onPress={() => { navigation.navigate('IgualStep2') }} />}
        >
            <>
                <Text style={styles.title}>Igualmente</Text>

                <NamesInput />
            </>
        </MainBg >

    );
}


