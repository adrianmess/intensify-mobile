import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Legs extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientLegs}>
      <View style={styles.legsContainer}>
          <Text style={styles.legsGrpTxt}>Legs</Text>

        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientLegs: {
    flex: 1,
  },
  legsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legsGrpTxt: {
    color: 'white',
    margin: 10,
  },
});




export default Legs;
