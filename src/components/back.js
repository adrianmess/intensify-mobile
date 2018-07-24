import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Back extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientBack}>
      <View style={styles.backContainer}>
          <Text style={styles.backGrpTxt}>Back</Text>
  
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientBack: {
    flex: 1,
  },
  backContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backGrpTxt: {
    color: 'white',
    margin: 10,
  },
});




export default Back;
