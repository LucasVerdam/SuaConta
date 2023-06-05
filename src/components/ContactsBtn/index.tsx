import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

import contacts from '../../assets/contacts.png'

import { styles } from './styles';


export function ContactsBtn({ modal, setModal }: any) {
    return (
        <TouchableOpacity onPress={() => setModal(!modal)} >
            <View style={styles.container}>
                <Image style={styles.image} source={contacts} />
            </View>
        </TouchableOpacity>
    );
}