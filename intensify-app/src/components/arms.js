import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const armsdata = require ('../../assets/basic.json');

export default class Arms extends Component {
  constructor()
  { super();
  this.state= armsdata
}
  render() {

    return (
      <LinearGradient colors={['#abd264', '#0ab8af']} style={styles.linearGradientArms}>
      <View style={styles.armsContainer}>
          <Text style={styles.armsGrpTxt}>Triceps</Text>
          <Text style={styles.armsGrpTxt}>Biceps</Text>
          <Text style={styles.armsGrpTxt}>Forearms</Text>
          <Text key={armsdata.arms.biceps} style={styles.armsGrpTxt}>{armsdata.arms.biceps.exname}</Text>
          <Flatlist
            data={this.state.biceps}
            renderItem={({item}) =>
            <Text>{item.biceps}</Text>
            }
            />
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
