import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Chest extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientChest}>
      <View style={styles.chestContainer}>
          <Text style={styles.chestGrpTxt}>Chest</Text>

        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientChest: {
    flex: 1,
  },
  chestContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chestGrpTxt: {
    color: 'white',
    margin: 10,
  },
});




export default Chest;
