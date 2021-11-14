//import liraries
import React from 'react';
import { Text } from 'react-native';

import counterstyle from './counter.style';

// create a component
const CounterDescription = () => {
    return (
      <>
        <Text style={counterstyle.text}>
          Tons of CO2 emitted into the atmosphere
        </Text>
        <Text style={counterstyle.emphasis}>SINCE OPENING THIS APP</Text>
      </>
    );
};


//make this component available to the app
export default CounterDescription;
