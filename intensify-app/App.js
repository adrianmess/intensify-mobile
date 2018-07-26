import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Router from './src/Router';
import Header from './src/components/header';
import Welcome from './src/components/welcome';



const backgroundImg = require('./assets/img/login-bg-small.jpg');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

      <Router />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,

  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});
