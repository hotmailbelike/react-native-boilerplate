/* 

//form2 works without signing in


*/

import React from 'react';
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
  Icon,
} from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//import { withNavigationFocus } from 'react-navigation'

class Form2 extends React.Component {
  state = {
    state1: '',
    state1: '',
    state1: '',
  };

  handleSubmit = () => {
    // console.log('state: ', this.state);
    let state = {...this.state};

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(state),
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        },
      );
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

Form2.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Form2</Title>
      </Body>
      <Right />
    </Header>
  ),
});

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 1,
    // width: '70%',
    borderColor: '#cccccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '80%',
    marginLeft: 15,
  },
});

export default withNavigationFocus(Form2);
