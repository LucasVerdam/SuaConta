import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNav } from "./Stack";


export function Router() {

    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    );
}