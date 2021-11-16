//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const StoryCard = () => {
    return (
        <View style={styles.container}>
            {/* Add image for story */}

            {/* Replace with text from database */}
            <Text style={styles.text}>StoryCard about Climate Change
            </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    text: {
        textAlign: "center",
    }
});

//make this component available to the app
export default StoryCard;
