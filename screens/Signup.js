import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import COLORS from '../assets/colors'
import ICONS from '../assets/icons/icons'

export default function Signup({setpage}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState('Male');
  const [genderIcon, setGenderIcon] = useState('male');

  const genderImage = () => {
    if(gender === 'Male'){
      return(
        <Image source={ICONS.male} style={{ width: 50, height: 50, marginBottom: 10}} />
      )
    }
    else if(gender === 'Female'){
      return(
        <Image source={ICONS.female} style={{ width: 50, height: 50, marginBottom: 10}} />
      )
    }
    else{
      return(
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity 
            onPress={() => setGenderIcon('lgbt1')}
          >
            <Image source={ICONS.lgbt1} style={genderIcon === 'lgbt1' ? { width: 50, height: 50, marginBottom: 10, marginRight: 10, borderWidth: 4, borderColor: COLORS.primary, borderRadius: 5} : { width: 50, height: 50, marginBottom: 10, marginRight: 10}} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGenderIcon('lgbt2')}
          >
            <Image source={ICONS.lgbt2} style={genderIcon === 'lgbt2' ? { width: 50, height: 50, marginBottom: 10, borderWidth: 4, borderColor: COLORS.primary, borderRadius: 5} : { width: 50, height: 50, marginBottom: 10}} />
          </TouchableOpacity>
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        {genderImage()}
        <Text style={styles.heading}>
          Hello! {'\n'}
          Signup to {'\n'}
          get started
        </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
        placeholderTextColor={COLORS.primary}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor={COLORS.primary}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor={COLORS.primary}
      />
      <View style={styles.genderWrapper}>
        <TouchableOpacity 
          style = {gender === 'Male' ? styles.genderActive : styles.gender}
          onPress={() => {setGender('Male'); setGenderIcon('male');}}
        >
          <Text>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = {gender === 'Female' ? styles.genderActive : styles.gender}
          onPress={() => {setGender('Female'); setGenderIcon('female');}}
        >
          <Text>
            Female
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = {gender === 'Other' ? styles.genderActive : styles.gender}
          onPress={() => {setGender('Other'); setGenderIcon('lgbt1');}}
        >
          <Text>
            Other
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.loginButton}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Signup</Text>
      </TouchableOpacity>
      <View style={styles.extra}>
        <TouchableOpacity>
          <Text>
            Already have an account?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setpage('login')}
        >
          <Text style={{color: COLORS.primary, textDecorationLine: 'underline', marginLeft: 5}}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '80%',
    borderColor: COLORS.primary,
  },
  heading: {
    fontSize: 45,
    lineHeight: 60,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  headingWrapper: {
    width: '80%',
    margin: 10,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    height: 50,
    margin: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 10,
  },
  extra: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  genderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%'
  },
  gender: {
    backgroundColor: COLORS.secondary,
    height: 50,
    marginTop: 12,
    marginBottom: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 10,
    width: '30%',
  },
  genderActive: {
    backgroundColor: COLORS.secondary,
    height: 50,
    marginTop: 12,
    marginBottom: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    width: '30%',
    borderColor: COLORS.primary
  }
});
