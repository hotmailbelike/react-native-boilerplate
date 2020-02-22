import React from 'react';
import {Text, View, StyleSheet, Image, StatusBar} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  Root,
  Form,
  Item,
  Input,
} from 'native-base';

export default class SignInView extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Sign In',
    drawerIcon: ({tintColor}) => (
      <Image
        // source={require('../../assets/Blackbird.jpg')}
        //   style={[styles.icon, { tintColor: tintColor }]}
        style={{width: 30, height: 30}}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      // firstName: '',
      // lastName: '',
      email: '',
      password: '',
      error: '',
    };
  }
  storeToken = async token => {
    try {
      await AsyncStorage.setItem('token', token);
      // console.log('Token-> ', token);
    } catch (e) {
      console.log(e);
    }
  };
  // form validation
  validate = (text, key) => {
    //console.log(text)
    console.log(key);
    //this.state[key] accessing state through key
  };

  //send user sign in data to database
  handleSubmit = () => {
    const signInDetails = {
      email: this.state.email,
      password: this.state.password,
    };

    // console.log(signInDetails);
    fetch('https://rentalvr.herokuapp.com/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(signInDetails),
    })
      .then(res => res.json())
      .then(
        result => {
          if (!result.token) {
            return this.setState({error: result.error}, () => {
              console.log(this.state.error);
            });
          }
          this.storeToken(result.token);
          console.log(result.token);
          this.props.navigation.navigate('ListingView');
        },
        e => {
          console.log(e);
        },
      );
  };

  render() {
    return (
      <Root>
        <Container>
          <Content>
            <Form>
              <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="Email"
                  onChangeText={text => this.setState({email: text})}
                />
              </Item>
              <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={text => this.setState({password: text})}
                />
              </Item>

              <View style={this.state.error && styles.signInError}>
                <Text style={{color: '#ff0000'}}>
                  {this.state.error && this.state.error}
                </Text>
              </View>

              <Button block danger onPress={this.handleSubmit}>
                <Text>Sign In</Text>
              </Button>

              {/* <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('UserAccount');
                           }} >
                         <Text>Sign IN</Text>
                    </TouchableOpacity> */}
              {/* <Button  onPress={() => {
                      this.props.navigation.navigate('UserAccount');
                           }} >
                           <Text>Sign IN</Text>
                    </Button> */}
            </Form>
          </Content>
        </Container>
      </Root>
    );
  }
}

SignInView.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Sign In</Title>
      </Body>
      <Right />
    </Header>
  ),
});

const styles = StyleSheet.create({
  signInError: {
    alignItems: 'center',
    marginBottom: 5,
  },
});
