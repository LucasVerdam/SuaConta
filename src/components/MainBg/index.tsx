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
        <>
            <Header />
            <View style={{ flex: 1 }}>
                {children}
            </View>
            <Footer backBtn={backBtn} nextBtn={nextBtn} />
        </>

    );
}