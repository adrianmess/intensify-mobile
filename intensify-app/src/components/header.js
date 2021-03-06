// Import Libraries for making a Component
import React from 'react';
import { Text } from 'react-native';


//Make a component
const Header = (props) => {
  const { textStyle } = styles;

  return <Text style={textStyle}>{props.headerText}</Text>;

};


const styles = {
  textStyle: {
    fontSize: 20,
    color: 'white',
    top: 5,
  },
};

//Make component available to other parts of the app
export default Header;
