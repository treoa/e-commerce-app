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
import feed from './assets/data/feed'
import SearchResults from './src/screens/SearchResults'
import DestSearch from './src/screens/DestSearch'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';



const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <DestSearch/>
      </SafeAreaView>
    </>
  );
};

export default App;
