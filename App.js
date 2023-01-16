import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import {useState} from 'react';

export default function App() {

  const [msg, setMsg] = React.useState('');
  const buttonPressed = () => {
    Alert.alert("Hello", "Syötit arvon " + msg);
  }

  return (
    <View style={styles.container}>
      <TextInput
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        value={msg}
        onChangeText={text => setMsg(text)}
      />
      <Button onPress={buttonPressed} title="Press me"></Button>
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
});

function numberGame() {
  // Luo statet

  useEffect(() => {
    
  }, [])

  function startGame() {
    //Arvotaan satunnailuku
    // nollataan laskuri
  }
}
