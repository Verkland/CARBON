import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { useWindowDimensions, StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { IconButton, Colors, Card } from 'react-native-paper';

import CarbonSinceAppStart from "./Components/EmissionCounter/carbonsinceappstart";
import StoryCard from "./Components/Cards/storycard";
import Flatlist from "./Components/flatlist";
import theme from "./Components/Theme/theme";

const ExploreRoute = () => (
    <Flatlist></Flatlist>
);

const LearnRoute = () => (
  <ScrollView style={theme.scrollview}>
    <StoryCard></StoryCard>
  </ScrollView>
);

const renderScene = SceneMap({
  first: ExploreRoute,
  second: LearnRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={theme.tabUnderline}
    style={theme.headerBGColor}
  />
);

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Explore' },
    { key: 'second', title: 'Learn' },
  ]);

  return (
    <>
      <SafeAreaView style={theme.headerBGColor}></SafeAreaView>
      <View style={theme.headerBGColor}>
        <Text style={theme.headerText}>carbon</Text>
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
