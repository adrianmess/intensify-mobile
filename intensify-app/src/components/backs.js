import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

class Backs extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientBacks}>
        <View style={styles.backsMusclesGrpContainer}>
          <View style={styles.backsMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/backs/back-arm-muscles.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Back Arm Muscles</Button>
          </View>
          <View style={styles.backsMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/backs/lat_pull_muscles.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Lateral Pull</Button>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientBacks: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  backsMusclesGrpContainer: {
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




export default Backs;
