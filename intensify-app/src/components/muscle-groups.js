import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

class MuscleGroups extends Component {
  render() {
    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradient}>
        <View style={styles.muscleContainer}>
          <View style={styles.muscleContainerTop}>
            <View style={styles.muscleIconTextGrp}>
              <Button onPress={Actions.arms} style={styles.muscleGrpTxt}>
                <Image source={require('../../assets/img/muscle-buttons/arms-icon.png')} />
                </Button>
              <Button onPress={Actions.arms} style={styles.muscleGrpTxt}>Arms</Button>
            </View>
            <View style={styles.muscleIconTextGrp}>
              <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-buttons/back-icon.png')} />
              </Button>
              <Button onPress={Actions.backs} style={styles.muscleGrpTxt}>Back</Button>
            </View>
          </View>
          <View style={styles.muscleContainerCenter}>
            <View style={styles.muscleIconTextGrp}>
              <Button onPress={Actions.chest} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-buttons/chest-icon.png')} />
              </Button>
              <Button onPress={Actions.chest} style={styles.muscleGrpTxt}>Chest</Button>
            </View>
          </View>
          <View style={styles.muscleContainerBottom}>
            <View style={styles.muscleIconTextGrp}>
              <Button onPress={Actions.legs} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-buttons/legs-icon.png')} />
              </Button>
              <Button onPress={Actions.legs} style={styles.muscleGrpTxt}>Legs</Button>
            </View>
            <View style={styles.muscleIconTextGrp}>
              <Button onPress={Actions.shoulders} style={styles.muscleGrpTxt}>
              <Image source={require('../../assets/img/muscle-buttons/shoulders-icon.png')} />
              </Button>
              <Button onPress={Actions.shoulders} style={styles.muscleGrpTxt}>Shoulders</Button>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({

  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  muscleContainerTop: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 150,
    marginTop: '25%',
    justifyContent: 'space-around',
  },
  muscleContainerCenter: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
  },
  muscleContainerBottom: {
    flex: 1,
    flexDirection: 'row',
      justifyContent: 'space-around',
  },
  muscleIconTextGrp: {
    width: 100,
    height: 150,
  },
  muscleGrpTxt: {
    color: 'white',
    margin: 10,
  },
});




export default MuscleGroups;
