import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { BackButton } from '../../../components/BackButton';
import { CardName } from '../../../components/CardName';
import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';

import { global } from '../../../context/ContaContext';
import { styles } from './styles';

export function MistaStep4({ navigation }: any) {

    const { nomes } = global();


    return (
        <MainBg
            backBtn={<BackButton onPress={() => navigation.navigate('MistaStep3')} />}
            nextBtn={<NextButton onPress={() => {
                console.warn(nomes);
                navigation.navigate('MistaStep5')
            }} />}
        >
            <>
                <Text style={styles.title}>Igualmente</Text>

                <Text style={styles.txt}>Alguém vai pagar no cartão?</Text>
                <Text style={styles.subTxt}>Selecione os nomes:</Text>

                <ScrollView>
                    <View style={styles.container}>
                        {nomes.map(i =>
                            <CardName
                                id={i.id}
                                key={i.id}
                                nome={i.nome}
                            />
                        )}
                    </View>
                </ScrollView>
            </>
        </MainBg>
    );
}