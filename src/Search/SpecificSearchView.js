import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import {StyleSheet} from 'react-native';
//import { withNavigationFocus } from 'react-navigation'

export default class SpecificSearchView extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: 'Search',
  //   drawerIcon: ({tintColor}) => (
  //     <Image
  //       // source={require('../../assets/Blackbird.jpg')}
  //       //   style={[styles.icon, { tintColor: tintColor }]}
  //       style={{width: 30, height: 30}}
  //     />
  //   ),
  // };
  /* 
  state = {
    category: '',
    short_address: '',
    description: '',
    title: '',
    rate_monthly: {
      $gte: '',
      $lte: '',
    },
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Category"
                onChangeText={text => this.setState({category: text})}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Area"
                onChangeText={text => this.setState({short_address: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Describe"
                onChangeText={text => this.setState({description: text})}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Title"
                onChangeText={text => this.setState({title: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Minimum Rent"
                onChangeText={text => {
                  let rate_monthly = {...this.state.rate_monthly};
                  rate_monthly.$gte = text;
                  return this.setState({rate_monthly});
                }}
              />
            </Item>
            <Item>
              <Input
                placeholder="Maximum Rent"
                onChangeText={text => {
                  let rate_monthly = {...this.state.rate_monthly};
                  rate_monthly.$lte = text;
                  return this.setState({rate_monthly});
                }}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
   */

  render() {
    return (
      <Container>
        {/* <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header> */}
        <Content>
          <Item>
            <Text>
              Here is your chance to be more specific about what you are looking
              for
            </Text>
          </Item>
          <Item>
            <Button primary iconRight>
              Get Started
            </Button>
          </Item>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

SpecificSearchView.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Search</Title>
      </Body>
      <Right />
    </Header>
  ),
});

const styles = StyleSheet.create({});
