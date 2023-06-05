import React from 'react';
import { View } from 'react-native';

import { Header, Footer } from '../HeaderFooter';


interface Props {
    children: JSX.Element;
    backBtn?: JSX.Element;
    nextBtn?: JSX.Element;
}

export function MainBg({ children, backBtn, nextBtn }: Props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#C4C4C4' }}>
            <Header />
            <View style={{ flex: 1 }}>
                {children}
            </View>
            <Footer backBtn={backBtn} nextBtn={nextBtn} />
        </View>

    );
}