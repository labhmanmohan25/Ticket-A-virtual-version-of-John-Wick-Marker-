import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import Login from './screens/Login'
import Signup from './screens/Signup';
import Navigation from './screens/Navigation'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [page, setPage] = useState('login');

  if(loggedIn === true){
    return(
      <Navigation />
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