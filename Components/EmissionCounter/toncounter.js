//import libraries
import React, { useState } from 'react';
import { Text } from 'react-native';

import counterstyle from './counter.style';

// create a component
const TonCounter
 = () => {
    const [numberTons, setNumber] = useState(0);
    const [countingStarted, setCountingStarted] = useState(false);
  
    if (!countingStarted)
    {
      updateNumbers();
      setCountingStarted(true);
    }

    // 51 billion tons a year divided by seconds in a year = 1 616 tons emitted every second
    // There are 31540020 seconds in a year. Source: https://www.wolframalpha.com/input/?i=31540020+seconds 
    // Divide that by 10 to update every 100 millisecond, giving a smooth animation

    function updateNumbers(){
      var secs = 1 * 100;
      var count = 0;
      setInterval(function () {
        count += 161.6;
        setNumber(count.toFixed(0));
      }, secs);
    }

    // The "replace"-part forces the string to use comma separation between thousands
    return <Text style={counterstyle.number}>{numberTons.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>;
};

//make this component available to the app
export default TonCounter
;
