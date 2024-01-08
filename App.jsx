//import liraries
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import ContainerNavigation from './src/router/NavigationContainer';

// create a component
const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#242424', flex:1}}>
      <ContainerNavigation />
    </SafeAreaView>
  );
};

export default App;
