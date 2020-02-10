import React from 'react';
import {Image, StatusBar} from 'react-native';
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
  Text,
  AsyncStorage,
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
    };
  }
  // form validation
  validate = (text, key) => {
    //console.log(text)
    console.log(key);
    //this.state[key] accessing state through key
  };

  //send user sign in data to database
  handleSubmit = () => {
    const signInDetails = this.state;
    // const signInDetails = {
    //   email: 'run@run.com',
    //   password: 'run12345',
    // };
    console.log(signInDetails);
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
          // console.log(result);
          // console.log(result.token);
          const storeToken = async () => {
            try {
              await AsyncStorage.setItem('token', result.token);
            } catch (e) {
              console.log(e);
            }
          };
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
              {/* <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="First Name"
                  onChangeText={text => this.validate(text, 'firstName')}
                />
              </Item>
              <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="Last Name"
                  onChangeText={text => this.validate(text, 'lastName')}
                />
              </Item> */}
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
              <Button block danger onPress={this.handleSubmit}>
                <Text>Sign In</Text>
              </Button>
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
