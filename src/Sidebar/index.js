import React from 'react';
import {AppRegistry, Image, StatusBar} from 'react-native';
import {Container, Content, Text, List, ListItem, Left} from 'native-base';

const routes = [
  {name: 'Sign In', route: 'SignInView'},
  {name: 'Sign Up', route: 'SignUpView'},
  {name: 'About', route: 'AboutView'},
  {name: 'Help', route: 'HelpView'},
  {name: 'Add Listing', route: 'AddListing'},
  {name: 'Search', route: 'SpecificSearchView'},
  {name: 'SpecificSearch', route: 'GetStartedView'},
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
