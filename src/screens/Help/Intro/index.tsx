import React from 'react';
import { View, Text } from "react-native";

import { PlateBg } from '../../../components/PlateBg';
import { DivButton } from '../../../components/Divbutton';

import user from '../../../assets/user.png'
import users3 from '../../../assets/users3.png'
import users4 from '../../../assets/users4.png'

import { styles } from "./styles";


export function Intro({ navigation }: any) {

    return (

        <PlateBg>

            <View style={styles.container}>

                <Text style={styles.title}>

                    Existem 3 jeitos de dividir Sua Conta{'\n'} de um jeito
                    <Text style={{ fontWeight: 'bold' }}> fácil</Text>!
                </Text>


                <Text style={styles.tx1}>

                    Vamos conhecer:
                </Text>

                <>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                        <DivButton
                            nome={'Individual'}
                            toScreen={'Indiv'}
                            source={user}
                            navigation={navigation}
                        />
                        <DivButton
                            nome={'Igualmente'}
                            toScreen={'Igual'}
                            source={users3}
                            navigation={navigation}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <DivButton
                            nome={'Mista!'}
                            toScreen={'Mista'}
                            source={users4}
                            navigation={navigation}
                        />
                    </View>
                </>
            </View>



        </PlateBg >

    );
}

