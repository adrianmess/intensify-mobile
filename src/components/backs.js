import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Backs extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientBacks}>
      <View style={styles.backsContainer}>
          <Text style={styles.backsGrpTxt}>Back</Text>

        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientBacks: {
    flex: 1,
  },
  backsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backsGrpTxt: {
    color: 'white',
    margin: 10,
  },
});




export default Backs;
