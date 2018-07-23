import React from 'react';
import { Text } from 'react-native';

const MuscleGroups = () => {
  const { textStyle } = styles;

  return <Text style={muscleGroup}>Test</Text>;

};



const styles = {
  muscleGroup: {
    fontSize: 20,
    color: 'white',
  },
};


export default MuscleGroups;
