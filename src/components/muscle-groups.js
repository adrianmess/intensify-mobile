import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class MuscleGroups extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradient}>
      <View style={styles.muscleContainer}>
          <Text style={styles.muscleGrpTxt}>Arms</Text>
          <Text style={styles.muscleGrpTxt}>Back</Text>
          <Text style={styles.muscleGrpTxt}>Chest</Text>
          <Text style={styles.muscleGrpTxt}>Legs</Text>
          <Text style={styles.muscleGrpTxt}>Shoulders</Text>
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
