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
  Root,
} from 'native-base';
//import { withNavigationFocus } from 'react-navigation'

export default class HelpView extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Help',
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
      <Root>
        <Container>
          <Content>
            <Text>Help view</Text>
          </Content>
        </Container>
      </Root>
    );
  }
}

HelpView.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Help</Title>
      </Body>
      <Right />
    </Header>
  ),
});
