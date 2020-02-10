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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  //send user sign in data to database
  handSubmit = () => {
    console.log(this.state);
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
                  onChangeText={text => this.setState(text)}
                />
              </Item>
              <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="Email"
                  onChangeText={text => this.setState(text)}
                />
              </Item>
              <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={text => this.setState(text)}
                />
              </Item>
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
