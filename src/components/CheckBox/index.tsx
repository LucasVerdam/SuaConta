import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Check from '../../assets/check-fat-fill.svg'


import { styles } from './styles';

interface Props {
    contacts: { name: string, id: number, check: boolean }[];
}

export function CheckBox({ contacts }: Props) {

    const [contactList, setContactList] = useState(contacts)


    return (
        <>
            {
                contactList.map((op) => (
                    <TouchableOpacity
                        key={op.id}
                        style={styles.container}
                        onPress={() => { console.warn(op); }}
                    >

                        <View style={styles.contact}>
                            <Text
                                style={styles.names}>
                                {op?.name}
                            </Text>

                            {op.check ?
                                <View style={styles.checked}>
                                    <Check fill={'#fff'} height={15} width={15} />
                                </View>
                                :
                                <View style={styles.null}>

                                </View>
                            }
                        </View>
                    </TouchableOpacity>
                ))
            }
        </>
    );
}