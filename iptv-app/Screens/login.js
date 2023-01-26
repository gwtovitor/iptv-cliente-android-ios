import React, { Component, useState } from 'react';
import {View, TextInput, Text, StyleSheet, Modal, StatusBar, Button, TouchableOpacity} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
 
}


changeScreenOrientation()


class Login extends Component{
  
  constructor(props){
    super(props);
    this.state = {
        login: '',
        senha: ''
       };
   
  }


  render(){
    return(
        <View style={styles.container}>
          
            <StatusBar hidden={true}/>
            <Text style={styles.textologin}> Projeto Manchete </Text>
            <TextInput underlineColorAndroid = "transparent" 
            placeholder='Digite o seu Login'
            onChangeText={(user) => this.setState({login: user}) }
            style={styles.inputs}>
            </TextInput>
            <TextInput underlineColorAndroid = "transparent" 
            placeholder='Digite sua senha' 
            secureTextEntry={true}
            style={styles.inputs}
            onChangeText={(senha) => this.setState({senha: senha}) }></TextInput>
            <TouchableOpacity style={styles.botaoarea}>
              <Text style={styles.botaoentrar}>ENTRAR</Text>
            </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },

  inputs:{
    borderColor: 'black',
    width: 300,
    height: 40, 
    margin: 5,
    borderWidth: 2,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 10,
  },
  textologin:{
    fontSize: 20,
    color: 'yellow',
    fontSize: 30,
    paddingBottom: 20,
    fontWeight: 'bold',

  },
 
  botaoarea:{
    width: 200,
    height: 40,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 15,
  },
});
export default Login
