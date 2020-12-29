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
        <ScrollView>
          {feed.map((x) => (
            <Post post={x}/>
          ))}
        </ScrollView>
        
      </SafeAreaView>
    </>
  );
};

export default App;
