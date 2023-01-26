import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

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
           
            <StatusBar hidden={true}/>
            <Video
            source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            loadAsync
            shouldPlay
            resizeMode='contain'
            useNativeControls
            style={{ flex: 1,}}/>
          </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
  });
  export default Videoapp
  