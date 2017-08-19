/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View>
      <Header headerText={'Albums'} />
      <Text>Hello World</Text>
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App);
