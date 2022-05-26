import React, { useContext } from 'react';
import { Text, FlatList } from 'react-native';
import { BackButton } from '../../../components/BackButton';

import { MainBg } from '../../../components/MainBg';
import { NomesContext } from '../../../context/NomeContext';
//import IntInput from '../../components/IntInput';
//import { NamesInput } from '../../../components/NamesInput';

import { styles } from './styles';


export function MistaStep1({ navigation }: any) {

    const { nomes } = useContext(NomesContext)

    return (
        <MainBg
            backBtn={<BackButton onPress={() => navigation.navigate('Inicio')} />}
        >
            <>
                <Text style={styles.title}>Mista!</Text>

                <FlatList
                    data={nomes}
                    keyExtractor={i => i.id.toString()}
                    renderItem={({ item }) => {
                        return <Text> {item.nome} </Text>
                    }
                    }
                >
                </FlatList>
            </>
        </MainBg >
    );
}
