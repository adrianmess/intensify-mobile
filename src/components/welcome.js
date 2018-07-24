import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

const Welcome = () => {
  const { textStyle } = styles;
  return (
    <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Intensify</Text>

        <Text style={styles.welcome}>Welcome</Text>
        <Button onPress={Actions.musclegroups} stlye={styles.continueBtn}>Continue</Button>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create ({
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

export default Welcome;
