import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

class Legs extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientLegs}>
        <View style={styles.legsMusclesGrpContainer}>
          <View style={styles.legsMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/legs/calf-muslces.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Calf Muscle</Button>
          </View>
          <View style={styles.legsMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/legs/full-legs.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Full Legs</Button>
          </View>
          <View style={styles.legsMusclesSingle}>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-images/legs/glute_quads_calf_muscles.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Glutes | Quads</Button>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
  linearGradientLegs: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  legsMusclesGrpContainer: {
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




export default Legs;
