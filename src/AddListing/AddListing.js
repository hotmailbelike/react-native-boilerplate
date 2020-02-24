import React from 'react';
import {Image, StatusBar} from 'react-native';
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

export default class RenterProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // firstName: '',
      // lastName: '',
      /* _id: '5e37ccfbc3bf660017f525c9', */
      title: '',
      category: '',
      short_address: '',
      long_address: '',
      rate_monthly: '',
      conditions: '',
      status: true,
      description: '',
      /* created: '',
      renter: '', 
      status: true,
      renter_name: '', */
    };
  }

  handleSubmit = async () => {
    let userInfo = await AsyncStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    const listingDetails = this.state;
    // console.log(listingDetails);
    // const token = this.getToken();
    // console.log('handle token:', token.trim());
    fetch('https://rentalvr.herokuapp.com/api/rentListings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userInfo.token,
      },
      credentials: 'include',
      body: JSON.stringify(listingDetails),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  };

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
            <Text>Title</Text>

            <Item>
              <Input
                placeholder="Enter title"
                onChangeText={text => this.setState({title: text})}
              />
            </Item>
            <Text>Category</Text>

            <Item>
              <Input
                placeholder="Enter Category"
                onChangeText={text => this.setState({category: text})}
              />
            </Item>
            <Text>Short Address</Text>
            <Item>
              <Input
                placeholder="Enter Short Address"
                onChangeText={text => this.setState({short_address: text})}
              />
            </Item>
            <Text>Long Address</Text>
            <Item>
              <Input
                placeholder="Enter Long Address"
                onChangeText={text => this.setState({long_address: text})}
              />
            </Item>
            <Text>Rate(Monthly)</Text>
            <Item>
              <Input
                placeholder="Enter Amount"
                onChangeText={text => this.setState({rate_monthly: text})}
              />
            </Item>
            <Text>Condition</Text>
            <Item>
              <Input
                placeholder="Describe Item Condition"
                onChangeText={text => this.setState({conditions: text})}
              />
            </Item>
            <Text>Description</Text>
            <Item>
              <Input
                placeholder="Describe the Item"
                onChangeText={text => this.setState({description: text})}
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
        <Title>Add New Listing</Title>
      </Body>
      <Right />
    </Header>
  ),
});
