import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      img: ''
    };
    this.geradado = this.geradado.bind(this)
  }
  
geradado(){
  let aleatorio = Math.floor(Math.random() * 5 + 1)

  if (aleatorio == 1){
    this.setState({img: require('./src/1.jpg')})
  }
  else if (aleatorio == 2){
    this.setState({img: require('./src/2.jpg')})
  }
  else if (aleatorio == 3){
    this.setState({img: require('./src/3.jpg')})
  }
  else if (aleatorio == 4){
    this.setState({img: require('./src/4.jpg')})
  }
  else if (aleatorio == 5){
    this.setState({img: require('./src/5.jpg')})
  }
  else if (aleatorio == 6){
    this.setState({img: require('./src/6.jpg')})
  }
}

  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.textprincipal}>Bem vindo ao Dado</Text>
          <TouchableOpacity style={styles.botao} onPress={this.geradado}>
            <View style={styles.botaoarea}>
                <Text style={styles.textobotao}>Aperte para Gerar um valor no dado</Text>
            </View>
          </TouchableOpacity>
          <Image source={this.state.img}
          style={styles.img}></Image>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:30,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textprincipal:{
      fontSize: 20,
      color: 'red',
      fontWeight:'bold',
      paddingBottom: 10,
  },
  botao:{
      backgroundColor: 'black',
      borderRadius: 25,
      width: 230,
      height: 50,

    },
  botaoarea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  textobotao:{
    color: '#fff',
    fontWeight:'bold',
    padding: 4,
    fontSize: 10,
  },
  img:{
      width: 250,
      height: 250,
  },

});
export default App
