//import libraries
import React from 'react';
import { View } from 'react-native';

import TonCounter from './toncounter';
import counterstyle from './counter.style';
import CounterDescription from './counterdescription';

// create a component
const CarbonSinceAppStart = () => {
  return (
    <View style={counterstyle.container}>
      <TonCounter/>
      <CounterDescription/>
    </View>
  );
};

//make this component available to the app
export default CarbonSinceAppStart;
