/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './src/screens/Home'

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen/>
      </SafeAreaView>
    </>
  );
};

export default App;
