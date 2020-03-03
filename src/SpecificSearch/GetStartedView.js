import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Text,
  Item,
  View,
  Form,
  Input,
  Root,
  Picker,
} from 'native-base';
import {withNavigationFocus} from 'react-navigation';

const GetStartedView = props => {
  return (
    <View>
      <Text>Want to be more specific about what you are looking for?</Text>
      <Button>
        <Text>Get Started</Text>
      </Button>
    </View>
  );
};

GetStartedView.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Specific Search</Title>
      </Body>
      <Right />
    </Header>
  ),
});

const styles = StyleSheet.create({});

export default withNavigationFocus(GetStartedView);
