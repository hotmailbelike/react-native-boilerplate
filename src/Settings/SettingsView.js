import React from 'react';
import {Image, StatusBar} from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  Text,
} from 'native-base';
export default class SettingsView extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({tintColor}) => (
      <Image
        // source={require('../../assets/Blackbird.jpg')}
        //   style={[styles.icon, { tintColor: tintColor }]}
        style={{width: 30, height: 30}}
      />
    ),
  };
  render() {
    return (
      <>
        <Text>Settings Screen</Text>
      </>
    );
  }
}

SettingsView.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Setting</Title>
      </Body>
      <Right />
    </Header>
  ),
});
