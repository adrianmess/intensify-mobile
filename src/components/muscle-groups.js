import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

class MuscleGroups extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradient}>
      <View style={styles.muscleContainer}>
          <Button onPress={Actions.arms} style={styles.muscleGrpTxt}>Arms</Button>
          <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Back</Button>
          <Button onPress={Actions.chest} style={styles.muscleGrpTxt}>Chest</Button>
          <Button onPress={Actions.legs} style={styles.muscleGrpTxt}>Legs</Button>
          <Button onPress={Actions.shoulders} style={styles.muscleGrpTxt}>Shoulders</Button>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradient: {
    flex: 1,
  },
  muscleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  muscleGrpTxt: {
    color: 'white',
    margin: 10,
  },
});




export default MuscleGroups;
