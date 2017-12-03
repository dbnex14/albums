// Import libraries for making registerComponent
import React from 'react';
import { Text } from 'react-native';

// Make a registerComponent
const Header = () => {
  //2nd destructuring - makes textStyle be equal to the
  //fontSize object in styles below
  const { textStyle } = styles;

  //3rd, set style of Text to be equal to textStyle.  Note
  // the sintax we use in curly braces.  It is called "props"
  // which is short for properties.  We will talk about props
  // a lot, but now we focus just on styling.
  return <Text style={textStyle}>Albums!</Text>;
};

// 1st create styles object with a textStyle object
const styles = {
  textStyle: {
    fontSize: 40
  }
};


// Make the component available to other parts of the app
export default Header;
