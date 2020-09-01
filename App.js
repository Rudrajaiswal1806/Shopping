/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'FirstProject/Screens/Home';
import CategoryScreen from 'FirstProject/Screens/Category';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
          </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
