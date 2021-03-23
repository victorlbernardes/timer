import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';


class Botao extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      button: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#886532',
        height: 40,
        borderRadius: 5,
        margin: 10,

      },
       buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
      }
    });
  }

  render() {

     return (
      <TouchableOpacity style={this.styles.button} onPress={this.props.onPress} >
        <Text style={this.styles.buttonText}>{this.props.title}</Text>
      </TouchableOpacity>

    );
  }
}


export default class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = { number: 0,  startStop: 'Iniciar', clean: 'Zerar'}
    this.timer = null;
    this.startStopAction = this.startStopAction.bind(this);
    this.cleanAction = this.cleanAction.bind(this);
    
  }

  startStopAction() {
    let state = this.state;

    if(this.timer != null) {
			// PARAR O TIMER
			clearInterval(this.timer);
			this.timer = null;
			state.startStop = "Iniciar";
		} else {
			// COMEÇAR O TIMER
			this.timer = setInterval(()=>{
				let state = this.state;
				state.number += 0.1;
				this.setState(state);
			}, 100);

			state.startStop = "Parar";
		}
    
    this.setState(state);

  }

  cleanAction() {

    let state = this.state;

    if(this.timer !=null) {
      clearInterval(this.timer);
      this.timer == null;
      state.startStop = 'Iniciar'
    } 
    state.number = 0;
    
    this.setState(state);
  }

  render() {

    return (
      <View style={styles.body}>
        <Image source={require('./images/relogio.png')} />
        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>
        <View style={styles.buttonArea}>
          <Botao title={this.state.startStop} onPress={this.startStopAction}/>
          <Botao title={this.state.clean} onPress={this.cleanAction}/>
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c1f30'
  },
  timer: {
    fontSize: 80,
    color: '#baa07a',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: -150,
  },
  buttonArea: {
    flexDirection: 'row',
    height: 40,
    marginTop: 80

  }
});