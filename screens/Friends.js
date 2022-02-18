import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Tickets from './Tickets'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation'

const Stack = createStackNavigator();

export default function Friends() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Friends List" component={Navigation} options={{headerShown: false}}/>
        <Stack.Screen name="Tickets" component={Tickets} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
