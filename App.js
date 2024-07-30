import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import React,{useState} from 'react';

export default function App() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');

  //validate error message

  const validate = () => {
    if(!email.includes('@')){
      setEmailError('Invalid Email');
    }

    else if(password.length < 6){
      setPasswordError('Password Must be at least 6 characters');
    }

    else if(email.length === 0){
      setEmailError("Email  is required");
    }
    
    else if(email.indexOf(' ') >=0){
      setEmailError('Email cannot contain spaces');
    }

    else if(password.indexOf(' ')>=0){
      setPasswordError('Password cannot contain spaces');
    }

    else{
      setEmailError('');
      setPasswordError('');
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valiadate Error Message</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text style={styles.error}>{emailError}</Text>
        <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Text style={styles.error}>{passwordError}</Text>
      <Button
        title='Submit'
        onPress={validate}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:100,
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20,
  },
  input :{
    width:'80%',
    height:40,
    margin:12,
    borderWidth:1,
    padding:10
  },
  error:{
    color:'red'
  }
});
