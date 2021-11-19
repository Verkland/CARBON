import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import theme from '../Theme/theme';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const StoryCard = () => (
  <Card style={theme.cards}>
    <Card.Content>
      <Title>COMING SOON</Title>
      <Paragraph style={{marginBottom: 10}}>Learn the basics of what climate change is</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' }} />
  </Card>
);



export default StoryCard;

