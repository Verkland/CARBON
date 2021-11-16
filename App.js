import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import CarbonSinceAppStart from "./Components/EmissionCounter/carbonsinceappstart";
import StoryCard from "./Components/Cards/storycard";

export default function App() {
  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <CarbonSinceAppStart />
        <StatusBar style="auto" />
      </View>
      <View style={{flexDirection: "row"}}>
        {/* Replace storycards with flatlist that populates cards with data from database */}
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeview: {
    backgroundColor: "#94B3FD"
  },
  
  container: {
    flex: 1,
    flexDirection: "row",
  },

  scroll: {
    height: "100%"
  }

});
