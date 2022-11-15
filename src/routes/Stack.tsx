import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../screens/Welcome";
import { Inicio } from "../screens/Inicio";

import { IndivStep1 } from "../screens/Individual/IndivStep1";
import { IndivStep2 } from "../screens/Individual/IndivStep2";
import { IndivStep3 } from "../screens/Individual/IndivStep3";
import { IndivStep4 } from "../screens/Individual/IndivStep4";

import { IgualStep1 } from "../screens/Igualmente/IgualStep1";
import { IgualStep2 } from "../screens/Igualmente/IgualStep2";
import { IgualStep3 } from "../screens/Igualmente/IgualStep3";
import { IgualStep4 } from "../screens/Igualmente/IgualStep4";
import { IgualStep5 } from "../screens/Igualmente/IgualStep5";

import { MistaStep1 } from "../screens/Mista/MistaStep1";
import { MistaStep2 } from "../screens/Mista/MistaStep2";
import { MistaStep3 } from "../screens/Mista/MistaStep3";
import { MistaStep4 } from "../screens/Mista/MistaStep4";
import { MistaStep5 } from "../screens/Mista/MistaStep5";
import { MistaStep6 } from "../screens/Mista/MistaStep6";




const Stack = createNativeStackNavigator();

export function StackNav() {

    return (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Inicio" component={Inicio} />
            <Stack.Screen name="IndivStep1" component={IndivStep1} />
            <Stack.Screen name="IndivStep2" component={IndivStep2} />
            <Stack.Screen name="IndivStep3" component={IndivStep3} />
            <Stack.Screen name="IndivStep4" component={IndivStep4} />

            <Stack.Screen name="IgualStep1" component={IgualStep1} />
            <Stack.Screen name="IgualStep2" component={IgualStep2} />
            <Stack.Screen name="IgualStep3" component={IgualStep3} />
            <Stack.Screen name="IgualStep4" component={IgualStep4} />
            <Stack.Screen name="IgualStep5" component={IgualStep5} />

            <Stack.Screen name="MistaStep1" component={MistaStep1} />
            <Stack.Screen name="MistaStep2" component={MistaStep2} />
            <Stack.Screen name="MistaStep3" component={MistaStep3} />
            <Stack.Screen name="MistaStep4" component={MistaStep4} />
            <Stack.Screen name="MistaStep5" component={MistaStep5} />
            <Stack.Screen name="MistaStep6" component={MistaStep6} />
        </Stack.Navigator>
    );
}