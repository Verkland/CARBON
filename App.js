import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import EmissionsYearly from "./Components/emissionsyearly";

export default function App() {
  return (
    <SafeAreaView style={styles.safeview}>
      <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <EmissionsYearly />
        <StatusBar style="auto" />
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
