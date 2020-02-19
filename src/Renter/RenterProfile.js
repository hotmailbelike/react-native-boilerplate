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

export default class RenterProfile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Renter Profile',
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
            <Text>Renter</Text>
          </Content>
        </Container>
      </Root>
    );
  }
}

RenterProfile.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>RenterProfile</Title>
      </Body>
      <Right />
    </Header>
  ),
});
