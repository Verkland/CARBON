import React from 'react';
import { Linking, SafeAreaView, Image, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

import theme from './Theme/theme';
import StoryCard from './Cards/storycard';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'How to Avoid a Climate Disaster',
    description: "Bill Gates' new book tells you what you need to know about avoiding the worst climate outcomes.",
    image: 'https://media.gatesnotes.com/-/media/Images/Articles/Energy/My-new-climate-book-is-finally-here/htacd_2021_article-hero_1200x564_03.ashx',
    url: "https://www.theguardian.com/books/2021/feb/17/how-to-avoid-a-climate-disaster-by-bill-gates-review-why-science-isnt-enough",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Climeworks Removes Emissions',
    description: "Most everyone has Netflix or Spotify subscription already. But do you have a subscription to carbon dioxide removal?",
    image: 'https://images.unsplash.com/photo-1634467435669-831f777a6432?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2532&q=80',
    url: "https://www.theverge.com/2021/9/9/22663597/largest-direct-air-capture-plant-c02-climeworks-iceland",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Making Deserts Green',
    description: 'In this TEDx talk, Ole Morten Olesen from Desert Control shares how they turn sand to soil.',
    image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    url: "http://youtube.com/watch?v=stc5MUIloP0",
  },
];

const adUnitID = Platform.select({
  ios: "ca-app-pub-3940256099942544/4411468910",
  android: "ca-app-pub-3940256099942544/1033173712",
});

// Interstitial AD
function showInterstitialAds(url) {
  AdMobInterstitial.removeAllListeners();
  AdMobInterstitial.setAdUnitID(adUnitID);
  AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false }).then(() => {
    AdMobInterstitial.showAdAsync().catch((e) => console.log(e.message));
    AdMobInterstitial.addEventListener("interstitialDidClose", () => {
      Linking.openURL(url)
    });
  });
}

const Item = ({ title, description, image, url }) => (
  <Card style={theme.cards} onPress={() => {
    showInterstitialAds(url);
  }}>
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph style={{ marginBottom: 10 }}>
        {description}
      </Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: image }}></Card.Cover>
  </Card>
);

// create a component
const Flatlist = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} image={item.image} url={item.url} />
  );

  return (
    <SafeAreaView style={theme.scrollview}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

//make this component available to the app
export default Flatlist;
