import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Router } from './src/routes/Router';

import { NomesProvider } from './src/context/NomeContext';
//import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  return (

    <NomesProvider>
      <Router />
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent
      />
    </NomesProvider>

  );
}




