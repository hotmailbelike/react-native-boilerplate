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
    };
  }

  handleInterest = async () => {
    let userInfo = await AsyncStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    const token = userInfo.token;
    const userId = userInfo.user._id;
    console.log(token);
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
      .catch(e => console.log(e));
  };

  componentDidMount() {
    const {navigation} = this.props;
    const rentId = navigation.getParam('rentId', 'rentId');
    fetch('https://rentalvr.herokuapp.com/api/rentListings/' + rentId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(
        result => {
          // console.log(result);
          this.setState({rentDetails: result});
        },
        error => {
          throw error;
        },
      );
  }

  render() {
    const rentDetails = this.state.rentDetails;
    return (
      <Container>
        <Text> {rentDetails.title} </Text>
        <Text> {rentDetails.rate_monthly} </Text>
        {/* <Thumbnail source={{uri: rentDetails.image}} /> */}
        <Text> {rentDetails.short_address} </Text>
        <Button
          onPress={() => {
            this.handleInterest();
          }}>
          <Text>Interested</Text>
        </Button>
      </Container>
    );
  }
}
