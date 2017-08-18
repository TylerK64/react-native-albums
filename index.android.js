/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header';

const App = () => {
    return (
      <View>
      <Header />
      <Text>Hello World</Text>
      </View>
    );
};

AppRegistry.registerComponent('albums', () => App);
