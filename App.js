import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import Login from './screens/Login'
import Signup from './screens/Signup';
import Friends from './screens/Friends'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOaa2C3mOto9RCG-pzJoGPwVxGqQ5W0gA",
  authDomain: "tickets-eb6e3.firebaseapp.com",
  projectId: "tickets-eb6e3",
  storageBucket: "tickets-eb6e3.appspot.com",
  messagingSenderId: "318074086115",
  appId: "1:318074086115:web:bd8c543c7c249af6eedbd6",
  measurementId: "${config.measurementId}"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
} 

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [page, setPage] = useState('login');

  if(loggedIn === true){
    return(
      <Friends />
    )
  }
  else {
    if(page === 'login') {
      return(
        <Login setpage={setPage}/>
      )
    }
    else {
      return(
        <Signup setpage={setPage}/>
      )
    }
  }
}

const styles = StyleSheet.create({

});