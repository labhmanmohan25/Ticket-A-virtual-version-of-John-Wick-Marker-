import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Friends from './Friends'
import Settings from './Settings'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Friends" component={Friends} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
