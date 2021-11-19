//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from "./theme";

// create a component
const Logo = () => {
    return (
        <View style={styles.container}>
            <Text style={theme.headerText}>carbon</Text>
            <Text style={theme.headerText2}>stories</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
});

//make this component available to the app
export default Logo;
