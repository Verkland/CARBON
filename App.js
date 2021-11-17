import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { useWindowDimensions, StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { IconButton, Colors } from 'react-native-paper';

import CarbonSinceAppStart from "./Components/EmissionCounter/carbonsinceappstart";
import StoryCard from "./Components/Cards/storycard";

const FirstRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "#e9ecef" }}>
    <StoryCard/><StoryCard/><StoryCard/><StoryCard/>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "#e9ecef" }}>
    <StoryCard/><StoryCard/><StoryCard/><StoryCard/>
  </ScrollView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: "#343a40" }}
  />
);

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Solutions' },
    { key: 'second', title: 'Learn' },
  ]);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#343a40" }}></SafeAreaView>
      <View style={{ backgroundColor: "#343a40" }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 50,
            padding: 10,
          }}
        >
          carbon
        </Text>
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#94B3FD"
  },
});
