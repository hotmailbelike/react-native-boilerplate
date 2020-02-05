import React from 'react';
import {AppRegistry, Image, StatusBar} from 'react-native';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Left,
} from 'native-base';

const routes = [
  {name: 'Home',route: 'LandingView'},
  {name: 'Sign In', route: 'SignInView'},
  {name: 'About', route: 'AboutView'},
  {name: 'Help', route: 'HelpView'},
];

export default class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                    this.props.navigation.navigate(data.route);
                    this.props.navigation.closeDrawer();
                  }}>
                  <Left>
                    <Text style={{color: '#764443'}}>{data.name}</Text>
                  </Left>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
