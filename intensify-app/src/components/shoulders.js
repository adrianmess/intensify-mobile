import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

class Shoulders extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientShoulders}>
        <View style={styles.shouldersMusclesGrpContainer}>
          <View style={styles.shouldersMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/shoulders/triceps-shoulders.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Tricep Shoulders</Button>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientShoulders: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  armsMusclesGrpContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  muscleImages: {
    alignSelf: 'center',
    height: 150,
    width: 150,
  },

  muscleGrpTxt: {
    color: 'white',
    margin: 10,
  },
});




export default Shoulders;
