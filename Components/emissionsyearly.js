//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const EmissionsYearly = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.number}>37,000,000,000</Text>
        <Text style={styles.text}>Tons of CO2 emitted into the atmosphere</Text>
        <Text style={styles.emphasis}>GLOBALLY, THIS YEAR</Text>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B983FF",
    width: "100%",
    height: 200,
    borderRadius: 100,
    margin: 20
  },

  number: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    padding: 5,
  },

  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    padding: 5,
  },

  emphasis: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

//make this component available to the app
export default EmissionsYearly;
