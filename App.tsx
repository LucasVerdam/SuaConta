import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Router } from './src/routes/Router';

import { ContaProvider } from './src/context/ContaContext';
//import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  return (

    <ContaProvider>
      <Router />
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />
    </ContaProvider>

  );
}




