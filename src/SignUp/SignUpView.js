import React from 'react';
import {View, Image, StatusBar, StyleSheet} from 'react-native';
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
} from 'native-base';

export default class SignInView extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Sign Up',
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
      name: '',
      email: '',
      password: '',
      error: '',
    };
  }

  //send user sign in data to database
  handSubmit = () => {
    const signUpDetails = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    fetch('https://rentalvr.herokuapp.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(signUpDetails),
    })
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          return this.setState({error: result.error}, () => {
            console.log(this.state.error);
          });
        }
        this.props.navigation.navigate('SignInView');
      });
  };

  render() {
    return (
      <Root>
        <Container>
          <Content>
            <Form>
              <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="Name"
                  onChangeText={text => this.setState({name: text})}
                />
              </Item>
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
              <Button block danger onPress={this.handSubmit}>
                <Text>Sign Up</Text>
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
        <Title>Sign Up</Title>
      </Body>
      <Right />
    </Header>
  ),
});

const styles = StyleSheet.create({
  signInError: {
    color: 'rgb(255,0,0)',
    alignItems: 'center',
    marginBottom: 5,
  },
});
