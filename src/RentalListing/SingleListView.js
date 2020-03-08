import React, {Component} from 'react';
import {
  Container,
  Text,
  Button,
  TouchableOpacity,
  Thumbnail,
} from 'native-base';

import AsyncStorage from '@react-native-community/async-storage';

export default class SingleListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentDetails: [],
      interested: false,
      token: '',
    };
  }

  handleInterest = async () => {
    let userInfo = await AsyncStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    const token = userInfo.token;
    const userId = userInfo.user._id;
    console.log('token'+token);
    console.log(userId);
    const {navigation} = this.props;
    const rentId = navigation.getParam('rentId', 'rentId');
    fetch(
      'https://rentalvr.herokuapp.com/api/rentListings/showInterest/' + rentId,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token.trim(),
        },
        credentials: 'include',
      },
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({interested: true})
      })
      .catch(e => console.log(e));
  };
  
  async componentDidMount() {
    let userInfo = await AsyncStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    const token = userInfo? userInfo.token: null
    const userId = userInfo? userInfo.user._id: null
    const {navigation} = this.props;
    const rentId = navigation.getParam('rentId', 'rentId');
    fetch('https://rentalvr.herokuapp.com/api/rentListings/' + rentId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //credentials: 'include',
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          //this.setState({result:useId});
          this.isInterested(result, userId);
          this.setState({rentDetails: result, token:token});
        
        },
        error => {
          console.log(error);
          throw error;
        },
      );
  }
  isInterested = (result, userId) =>
  {
    let found = result.interested_people.indexOf(userId) 
    if (found != -1){
      this.setState({interested: true});
    }
  }
  render() {
    const rentDetails = this.state.rentDetails;
    return (
      <Container>
        <Text> {rentDetails.title} </Text>
        <Text> {rentDetails.rate_monthly} </Text>
        {/* <Thumbnail source={{uri: rentDetails.image}} /> */}
        <Text> {rentDetails.short_address} </Text>
        {this.state.token?<Button
          disabled={this.state.interested}
          onPress={() => {
            this.handleInterest();
          }}>
          <Text>{this.state.interested? "Interested" : "Show Interest"}</Text>
        </Button>:<Text>Sign in to show interest</Text>}
      </Container>
    );
  }
}
