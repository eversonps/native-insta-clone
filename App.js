/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './src/components/Header';

import Post from './src/components/Post';

export default function App() {
  const comments = [
      {
        nickname: 'Joana Elena Silva',
        comment: 'Excelente foto! '
      },
      {
        nickname: 'Julio Santos',
        comment: 'Verdade linda, passa zap'
      }
  ]
  
  return (
    <View style={{ flex: 1}}>
       <Header />
       <Post image={require('./src/assets/imgs/fence.jpg')} comments={comments}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  }
});

