import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Video } from 'expo-av';
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
            source={{ uri: 'http://hdmais.com:80/d623481/76268116/6287' }}
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
        backgroundColor: '#000'
    },

  });
  export default Videoapp
  