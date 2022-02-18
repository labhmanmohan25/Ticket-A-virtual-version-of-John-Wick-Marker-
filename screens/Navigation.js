import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings'
import ICONS from '../assets/icons/icons'
import COLORS from '../assets/colors'

const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <View style={styles.flex}>
      <Image
        style={styles.logo}
        source={ICONS.ticket}
      />
      <Text style={styles.title}>
        Tickets
      </Text>
    </View>
    
  );
}

function NoTitle() {
  return (
    <View>
    </View>
  );
}

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

export default function Navigation({navigation}) {
  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity style={styles.ticketWrapper} onPress={() => navigation.navigate('Tickets', { item: item })}>
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

  const friendsList = () => {
    return (
      <View style={styles.container}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} style={{width: '100%'}}/>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Friends') {
            iconName = focused
              ? ICONS.highFive
              : ICONS.friends;
          } else if (route.name === 'Settings') {
            iconName = focused ? ICONS.gearActive : ICONS.gear;
          }
          
          return <Image source={iconName} style={{height: 20, width: 20}} />;
        },
      })}
    >
      <Tab.Screen name="Friends" component={friendsList} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  logo: {
    height: 40,
    width: 40, 
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.primary,
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  }
});
