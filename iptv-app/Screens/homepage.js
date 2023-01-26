import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Video from 'react-native-video';
import * as ScreenOrientation from 'expo-screen-orientation';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
 }

changeScreenOrientation()


class Videoapp extends Component{
  
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
           
           <Video source={{uri: "http://hdmais.com:80/d623481/76268116/6283"}}  

            style={styles.backgroundVideo} />
         
          </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
  export default Videoapp
  