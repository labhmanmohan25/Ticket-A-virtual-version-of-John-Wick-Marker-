import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import COLORS from '../assets/colors'
import ICONS from '../assets/icons/icons'

export default function Login({setpage}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <View style={styles.extra}>
          <Image source={ICONS.female} style={{ width: 50, height: 50, marginBottom: 10}} />
          <Image source={ICONS.male} style={{ width: 50, height: 50, marginBottom: 10}} />
          <Image source={ICONS.lgbt1} style={{ width: 50, height: 50, marginBottom: 10}} />
          <Image source={ICONS.lgbt2} style={{ width: 50, height: 50, marginBottom: 10}} />
        </View>
        <Text style={styles.heading}>
          Hello Again! {'\n'}
          Welcome {'\n'}
          back
        </Text>
      </View>
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
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.loginButton}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.extra}>
        <TouchableOpacity>
          <Text>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setpage('signup')}
        >
          <Text style={{color: COLORS.primary, textDecorationLine: 'underline'}}>
            Signup
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
    justifyContent: 'space-between'
  }
});
