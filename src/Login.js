import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Pressable, TouchableHighlight } from 'react-native';


export default function LoginApp() {
  
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')}
      style={{ width: 167, height: 31, marginBottom:50 }}/>
      <TextInput
      style={{ height: 40, width:300, borderColor: '#d1cfc9', backgroundColor:'#e8e7e3', borderWidth: 1, marginBottom:20, padding:5, borderRadius: 10 }}
      underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#d1cfc9"
    />
     <TextInput
      style={{ height: 40, width:300, borderColor: '#d1cfc9', backgroundColor:'#e8e7e3', borderWidth: 1, marginBottom:20, padding:5, borderRadius: 10 }}
      underlineColorAndroid = "transparent"
      secureTextEntry={true}
      placeholder = "Password"
      placeholderTextColor = "#d1cfc9"
    />
<TouchableHighlight
  style={styles.submit}
  onPress={() => {
    alert('Bienvenido');
  }}
  underlayColor='#fff'>
    <Text style={styles.submitText}>Iniciar Sesión</Text>
</TouchableHighlight>
<Pressable>
  <Text style={{color:'orange'}}>Olvide mi contraseña</Text>
</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    paddingRight:100,
    paddingLeft:100,
    backgroundColor:'#f58e07',
    borderRadius:15,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      width:100
  }
});
