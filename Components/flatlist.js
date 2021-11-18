import React from 'react';
import { SafeAreaView, Image, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import theme from './Theme/theme';
import StoryCard from './Cards/storycard';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Drawdown',
      image: 'https://picsum.photos/700',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Carbon Capture',
      image: 'https://picsum.photos/700',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Reforesting',
      paragraph: 'Reforesting is super important',
      image: 'https://picsum.photos/700',
    },
  ];

  const Item = ({ title, image }) => (
    <Card style={theme.cards}>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph style={{ marginBottom: 10 }}>
          This is the solution we have all been waiting for. Are you ready for
          this?
        </Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: image }}></Card.Cover>
    </Card>
  );

// create a component
const Flatlist = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image}/>
      );

    return (
        <SafeAreaView style={theme.scrollview}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

//make this component available to the app
export default Flatlist;
