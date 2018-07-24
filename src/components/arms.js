import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Arms extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientArms}>
      <View style={styles.armsContainer}>
          <Text style={styles.armsGrpTxt}>Arms</Text>
  
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientArms: {
    flex: 1,
  },
  armsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  armsGrpTxt: {
    color: 'white',
    margin: 10,
  },
});




export default Arms;
