import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar as RStatusBar, Platform } from 'react-native';
import COLORS from '../assets/colors'
import ICONS from '../assets/icons/icons'

const data = {
  id: '1',
  name: 'Andu gundu',
  profile: 'https://media.allure.com/photos/6147f8f756022ff7c1bea7a2/3:4/w_2511,h_3348,c_limit/elizabeth%20olsen%202021%20emmys%20.jpeg'
};

export default function Settings() {

  return (
    <View style={styles.container}>
      <View style={styles.settingHeading}>
        <Image source={{uri: data.profile}} style={styles.profileImage} />
        <Text style={styles.settingHeadingName}>
          {data.name}
        </Text>
      </View>

      <StatusBar style="auto" backgroundColor="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: Platform === 'ios' ? 18 : RStatusBar.currentHeight,
  },
  profileImage: {
    width: 100, 
    height: 100,
    borderRadius: 50,
  },
  settingHeading: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
  },
  settingHeadingName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    paddingTop: 10,
  }
});
