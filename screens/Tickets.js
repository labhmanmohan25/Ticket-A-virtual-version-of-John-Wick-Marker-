import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import COLORS from '../assets/colors'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pending from './Pending'
import Upcoming from './Upcoming'
import data from '../dumyData'

const Tab = createMaterialTopTabNavigator();

export default function Tickets({navigation, route}) {

  console.log(route.params.item.name);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Pending" children={()=><Pending route={route} pending={data.pending}/>} />
      <Tab.Screen name="Upcoming" children={()=><Upcoming route={route} upcoming={data.upcoming}/>} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
  },
  heading: {
    color: COLORS.primary,
    fontSize: 18,
    padding: 5,
    margin: 10,
  }
});
