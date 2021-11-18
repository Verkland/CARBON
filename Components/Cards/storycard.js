import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import theme from '../Theme/theme';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const StoryCard = () => (
  <Card style={theme.cards}>
    <Card.Content>
      <Title>Drawdown Everywhere</Title>
      <Paragraph style={{marginBottom: 10}}>This is the solution we have all been waiting for. Are you ready for this?</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
);



export default StoryCard;

