import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import { MainBg } from '../../../components/MainBg';
import { NextButton } from '../../../components/NextButton';
import { BackButton } from '../../../components/BackButton';
import { CardName } from '../../../components/CardName';

import { global } from '../../../context/ContaContext';

import { styles } from './styles';


export function IgualStep3({ navigation }: any) {

    const { nomes } = global()

    function zeraC() {
        nomes.map(i => nomes[i.id].pgmtC = false)
    }


    return (
        <MainBg
            backBtn={<BackButton onPress={() => { zeraC(); navigation.navigate('IgualStep2') }} />}
            nextBtn={<NextButton onPress={() => { navigation.navigate('IgualStep4') }} />}
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


{/* <FlatList
                    data={nomes}
                    keyExtractor={i => i.id.toString()}
                    renderItem={({ item }) => {
                        return <Text> {item.id}- {item.nome}: {item.conta.toFixed(2)}</Text>
                    }}>
                </FlatList> */}