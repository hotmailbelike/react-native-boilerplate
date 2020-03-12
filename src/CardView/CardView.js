import React from 'react';
import {Text, Card, CardItem} from 'native-base';

export default class CardView extends React.Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Text>{this.props.title}</Text>
        </CardItem>
      </Card>
    );
  }
}
