import React from 'react';
import {Image, StatusBar} from 'react-native';
import {
  Container,
  Card,
  CardItem,
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
      category: '',
      short_address: '',
      long_address: '',
      rate: '',
    };
  }

  handleSubmit = () => {
    const listingDetails = this.state;
    // const signInDetails = {
    //   email: 'run@run.com',
    //   password: 'run12345',
    // };
    console.log(listingDetails);
    fetch('https://rentalvr.herokuapp.com/api/rentListings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(listingDetails),
    })
      .then((response) => response.json())
    .then((responseJson) => {
      console.log("Added New Listing" );
    })
    .catch((error) => {
      console.error(error);
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
            <Text>Category</Text>
            
            <Item>
            <Input placeholder="Enter Category"
            onChangeText={text => this.setState({category: text})}
             />
          </Item>
           <Text>Short Address</Text>
            <Item>
              <Input placeholder = "Enter Address"
               onChangeText={text => this.setState({short_address: text})}
              />
            </Item>
            <Text>Long Address</Text>
            <Item>
              <Input placeholder = "Enter Address"
              onChangeText={text => this.setState({long_address: text})}            
              />
            </Item>
            <Text>Rate(Monthly)</Text>
            <Item>
              <Input placeholder = "Enter Amount"
               onChangeText={text => this.setState({rate: text})}
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
        <Title>RenterProfile</Title>
        
      </Body>
      <Right />
    </Header>
  ),
});
