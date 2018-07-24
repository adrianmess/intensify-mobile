import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Shoulders extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientShoulders}>
      <View style={styles.shouldersContainer}>
          <Text style={styles.shouldersGrpTxt}>Shoulders</Text>

        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientShoulders: {
    flex: 1,
  },
  shouldersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shouldersGrpTxt: {
    color: 'white',
    margin: 10,
  },
});




export default Shoulders;
