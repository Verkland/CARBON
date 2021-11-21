import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Pressable, Modal, useState, useEffect, useWindowDimensions, StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { IconButton, Colors, Card } from 'react-native-paper';

import CarbonSinceAppStart from "./Components/EmissionCounter/carbonsinceappstart";
import StoryCard from "./Components/Cards/storycard";
import Flatlist from "./Components/flatlist";
import theme from "./Components/Theme/theme";
import Logo from "./Components/Theme/logo";



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

  const [modalVisible, setModalVisible] = React.useState(0);

  React.useEffect(() => {
    setModalVisible(true);
  }, []);

  return (
    <>
      <SafeAreaView style={theme.headerBGColor}></SafeAreaView>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Welcome</Text>
              <Text style={styles.modalText}>
                In this app you get to explore stories about the climate crisis
                and how we might solve it.
                 {"\n"}{"\n"}
                You'll see an ad before being redirected to each story.
                10% of all ad revenue goes towards carbon removal.
                {"\n"}{"\n"}
                This means that you'll remove some carbon every time you use the app, in addition to learning
                about the climate crisis.
                {"\n"}{"\n"}
                Go forth and
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>EXPLORE</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View style={theme.headerBGColor}>
        <Logo />
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
  modalView: {
    marginHorizontal: 15,
    marginTop: 120,
    backgroundColor: 'white',
    borderRadius: 70,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#343a40",
    padding: 15,
    borderRadius: 20
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1
  }
});
