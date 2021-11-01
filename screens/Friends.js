import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import COLORS from '../assets/colors'
import ICONS from '../assets/icons/icons'

const data = [
  {
    id: '1',
    name: 'Andu gundu',
    profile: 'https://media.allure.com/photos/6147f8f756022ff7c1bea7a2/3:4/w_2511,h_3348,c_limit/elizabeth%20olsen%202021%20emmys%20.jpeg'
  },
  {
    id: '2',
    name: 'Thanda Pani',
    profile: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F03%2F13%2Fdwayne-johnson.jpg&q=85'
  },
  {
    id: '3',
    name: 'Andu gundu',
    profile: 'https://media.allure.com/photos/6147f8f756022ff7c1bea7a2/3:4/w_2511,h_3348,c_limit/elizabeth%20olsen%202021%20emmys%20.jpeg'
  },
  {
    id: '4',
    name: 'Thanda Pani',
    profile: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F03%2F13%2Fdwayne-johnson.jpg&q=85'
  },
  {
    id: '5',
    name: 'Andu gundu',
    profile: 'https://media.allure.com/photos/6147f8f756022ff7c1bea7a2/3:4/w_2511,h_3348,c_limit/elizabeth%20olsen%202021%20emmys%20.jpeg'
  },
  {
    id: '6',
    name: 'Thanda Pani',
    profile: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F03%2F13%2Fdwayne-johnson.jpg&q=85'
  },
  {
    id: '13',
    name: 'Andu gundu',
    profile: 'https://media.allure.com/photos/6147f8f756022ff7c1bea7a2/3:4/w_2511,h_3348,c_limit/elizabeth%20olsen%202021%20emmys%20.jpeg'
  },
  {
    id: '7',
    name: 'Thanda Pani',
    profile: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F03%2F13%2Fdwayne-johnson.jpg&q=85'
  },
  {
    id: '8',
    name: 'Andu gundu',
    profile: 'https://media.allure.com/photos/6147f8f756022ff7c1bea7a2/3:4/w_2511,h_3348,c_limit/elizabeth%20olsen%202021%20emmys%20.jpeg'
  },
  {
    id: '9',
    name: 'Thanda Pani',
    profile: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F03%2F13%2Fdwayne-johnson.jpg&q=85'
  },
  {
    id: '10',
    name: 'Andu gundu',
    profile: 'https://media.allure.com/photos/6147f8f756022ff7c1bea7a2/3:4/w_2511,h_3348,c_limit/elizabeth%20olsen%202021%20emmys%20.jpeg'
  },
  {
    id: '12',
    name: 'Thanda Pani',
    profile: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F03%2F13%2Fdwayne-johnson.jpg&q=85'
  },
  {
    id: '14',
    name: 'Andu gundu',
    profile: 'https://media.allure.com/photos/6147f8f756022ff7c1bea7a2/3:4/w_2511,h_3348,c_limit/elizabeth%20olsen%202021%20emmys%20.jpeg'
  },
  {
    id: '15',
    name: 'Thanda Pani',
    profile: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F03%2F13%2Fdwayne-johnson.jpg&q=85'
  },
  {
    id: '16',
    name: 'Andu gundu',
    profile: 'https://media.allure.com/photos/6147f8f756022ff7c1bea7a2/3:4/w_2511,h_3348,c_limit/elizabeth%20olsen%202021%20emmys%20.jpeg'
  },
  {
    id: '17',
    name: 'Thanda Pani',
    profile: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F03%2F13%2Fdwayne-johnson.jpg&q=85'
  },
]

export default function Friends({setpage}) {

  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity style={styles.ticketWrapper}>
        <Image source={{
          uri: item.profile,
        }} 
        style={styles.profileImage} />
        <Text style={styles.ticket}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} style={{width: '100%'}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  ticketWrapper: {
    flex: 1,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  ticket: {
    fontSize: 18,
    padding: 5,
    margin: 10,
  },
  profileImage: {
    width: 40, 
    height: 40,
    borderRadius: 25,
  },
});
