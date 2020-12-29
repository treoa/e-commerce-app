/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './src/screens/Home'
import Post from './src/screens/Post'

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Post/>
      </SafeAreaView>
    </>
  );
};

export default App;
