import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

const Welcome = () => {
  const { textStyle } = styles;
  return (

    <ImageBackground source={require('../../assets/img/login-images/login-background.jpg')}  style={styles.backgroundImg} >
      <LinearGradient locations={[0,0.45,0.8,1]}colors={['rgba(171, 210, 100, 1)', 'rgba(91, 197, 138, .63)', 'rgba(39, 189, 161, .9)', 'rgba(10, 184, 175, 1)']} style={styles.linearGradient}>

        <View style={styles.container}>
          <Text style={styles.title}>Intensify</Text>
          <View style={styles.signButtons}>
            <Button onPress={Actions.musclegroups} stlye={styles.continueBtn}>
              <Image source={require('../../assets/img/login-images/sign-in.png')} style={styles.muscleImages} />
            </Button>
            <Button onPress={Actions.musclegroups} stlye={styles.continueBtn}>
              <Image source={require('../../assets/img/login-images/sign-up.png')} style={styles.muscleImages} />
            </Button>

            <View style={styles.socialButtons}>
              <Image source={require('../../assets/img/login-images/facebook.png')} style={styles.socialImages} />
            </View>

          </View>
        </View>
      </LinearGradient>
    </ImageBackground>

  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: '20%',
    paddingBottom: '40%',
    fontFamily: 'Cochin',
    fontSize: 36,
    color: 'white',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    position: "absolute",
    backgroundColor: "transparent",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: "transparent",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  signButtons: {
    marginTop: '52%',
  }
});

export default Welcome;
