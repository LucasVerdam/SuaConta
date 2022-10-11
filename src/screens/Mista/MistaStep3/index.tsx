import React from 'react';
import { Text } from 'react-native';

// import IntInput from '../../components/IntInput';
import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';


import { global } from '../../../context/ContaContext';
import { styles } from './styles';

export function MistaStep3({ navigation }: any) {

    const { nomes, produtos } = global()

    function end() {
        while (nomes.length > 0) {
            nomes.pop();
        }

        while (produtos.length > 0) {
            produtos.pop();
        }
    }

    return (

        <MainBg
            backBtn={<BackButton onPress={() => { navigation.navigate('MistaStep2') }} />}
            nextBtn={<NextButton onPress={() => { navigation.navigate('Inicio'); end(); }} />}
        >
            <>
                <Text style={styles.title}>Mista3</Text>


            </>
        </MainBg >

    );
}
