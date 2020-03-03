import React, {Component} from 'react';
import {
  Container,
  Text,
  Button,
  TouchableOpacity,
  Thumbnail,
} from 'native-base';

export default class SingleSearchResultView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentDetails: [],
    };
  }

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
      </Container>
    );
  }
}
