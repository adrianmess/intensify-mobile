import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

const armsdata = require ('../../assets/basic.json');

export default class Arms extends Component {
  constructor()
  { super();
    this.state= armsdata
  }
  render() {

    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientArms}>
        <View style={styles.armsMusclesGrpContainer}>
          <View style={styles.armsMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/arms/barbell-curl.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Barbell Curl</Button>
          </View>
          <View style={styles.armsMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/arms/tri_press_muscles.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Tricep Press</Button>
          </View>
          <View style={styles.armsMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/arms/forearms.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Forearms</Button>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientArms: {
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
