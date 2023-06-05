import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

function Header() {
    return (
        <View style={styles.header} />
    );
}


interface Props {
    backBtn?: JSX.Element;
    nextBtn?: JSX.Element;
}

function Footer({ backBtn, nextBtn }: Props) {
    return (
        <View style={styles.footer}>
            {backBtn}
            {nextBtn}
        </View>
    );
}

export { Header, Footer };