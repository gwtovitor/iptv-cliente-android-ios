import React, { Component, useState } from 'react';
import {View, StyleSheet, StatusBar, FlatList} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import apigetapi from '../src/services/getapi';
import ListaFilmes from '../src/Lista'

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
 
}
changeScreenOrientation()

class Homepage extends Component{
  
  constructor(props){
    super(props);
    this.state = {
          filmes: []
       };
   
  }

 async componentDidMount(){
  const response = await apigetapi.get('/iptv');
  this.setState({
    filmes: response.data
  });
}
  render(){
    return(
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          <FlatList
          data = {this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Filmes data={item}/>}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
export default Homepage
