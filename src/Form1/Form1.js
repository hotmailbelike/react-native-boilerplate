/* 

//form1 only works after signed in


*/

import React from 'react';
import {Image, StatusBar, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  /* Card,
  CardItem, */
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
  Input,
  Item,
} from 'native-base';
//import { withNavigationFocus } from 'react-navigation'

//form1 only works after signed in

export default class Form1 extends React.Component {
  state = {
    state1: '',
    state1: '',
    state1: '',
  };

  handleSubmit = async () => {
    let userInfo = await AsyncStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    const state = {...this.state};
    // const token = this.getToken();
    // console.log('handle token:', token.trim());
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userInfo.token,
      },
      credentials: 'include',
      body: JSON.stringify(state),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        ToastAndroid.show('Success', ToastAndroid.SHORT);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Root>
        <Container>
          <Content>
            <Text>state1</Text>

            <Item>
              <Input
                placeholder="Enter state1"
                onChangeText={text => this.setState({state1: text})}
              />
            </Item>
            <Text>state2</Text>

            <Item>
              <Input
                placeholder="Enter state2"
                onChangeText={text => this.setState({state2: text})}
              />
            </Item>
            <Text>state3</Text>
            <Item>
              <Input
                placeholder="Enter state3"
                onChangeText={text => this.setState({state3: text})}
              />
            </Item>

            <Button onPress={this.handleSubmit}>
              <Text>Submit</Text>
            </Button>
          </Content>
        </Container>
      </Root>
    );
  }
}

Form1.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Form1</Title>
      </Body>
      <Right />
    </Header>
  ),
});
