import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const StoryCard = () => (
  <Card style={{margin: 40, borderRadius: 20, backgroundColor: "#f8f9fa"}}>
    <Card.Content>
      <Title>Drawdown Everywhere</Title>
      <Paragraph style={{marginBottom: 10}}>This is the solution we have all been waiting for. Are you ready for this?</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
);



export default StoryCard;

