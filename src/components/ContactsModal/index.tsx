import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, ScrollView } from 'react-native';

import { styles } from './styles';
import { CheckBox } from '../CheckBox';

interface Props {
    modal: boolean;
    modalVis: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ContModal({ modal, modalVis }: Props) {

    const contacts = [
        { name: 'Lucas', id: 0, check: false },
        { name: 'Miosa', id: 1, check: false },
        { name: 'Nitori', id: 2, check: false },
        { name: 'Maseri', id: 3, check: false },
        { name: 'digo', id: 4, check: false },
        { name: 'Malena', id: 5, check: false },
        { name: 'Ryure', id: 6, check: false },
        { name: 'Les', id: 7, check: false },
        { name: 'Vy', id: 8, check: false },
    ]

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                modalVis(!modal);
            }}>

            <TouchableWithoutFeedback onPress={() => modalVis(!modal)}>
                <View style={styles.modalBg}></View>
            </TouchableWithoutFeedback>

            <View style={styles.container}>

                <View style={styles.title}>
                    <Text style={styles.txt1}>Contatos</Text>
                </View>

                <ScrollView>
                    <View style={styles.contactBox}>

                        <CheckBox contacts={contacts} />

                    </View>
                </ScrollView>
            </View>

        </Modal >

    );
}