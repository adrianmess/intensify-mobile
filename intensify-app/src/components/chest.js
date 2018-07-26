import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

class Chest extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientChest}>
        <View style={styles.chestMusclesGrpContainer}>
          <View style={styles.chestMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/chest/chest-bench-press.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Bench Press</Button>
          </View>
          <View style={styles.chestMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/abs/abs.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Abs</Button>
          </View>
          <View style={styles.chestMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/abs/obliques.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Obliques</Button>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientChest: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chestMusclesGrpContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
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




export default Chest;
