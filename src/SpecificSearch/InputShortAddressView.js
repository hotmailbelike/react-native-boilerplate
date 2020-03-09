import React from 'react';
import {StyleSheet} from 'react-native';
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
  Text,
  Item,
  Input,
  View,
  Picker,
  Form,
} from 'native-base';
import {add} from 'react-native-reanimated';

export default class InputShortAddressView extends React.Component {
  state = {
    short_address: '',
    loadedShort_address: [],
  };

  removeLoadedShort_addressFromState = () => {
    let state = this.state;
    delete state.loadedShort_address;
    this.setState({...state});
  };

  setShort_address = address => {
    this.setState({short_address: address});
  };

  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  componentDidMount() {
    const {navigation} = this.props;
    let state = this.state;
    let incomingState = navigation.getParam(
      'partialSearchTerm',
      'partialSearchTerm',
    );

    if (!this.state.loadedShort_address) {
      let state = this.state;
      state.loadedShort_address = [];
    }

    state = {...state, ...incomingState};
    this.setState({...state}, () => {
      console.log('mount', this.state);
    });
    fetch(
      'https://rentalvr.herokuapp.com/api/rentListings/getDistinctShort_address',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      },
    )
      .then(res => res.json())
      .then(result => {
        this.setState({loadedShort_address: result}, () => {
          console.log(this.state.loadedShort_address);
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <View>
              <Text>Which Area/Location do you want to rent from?</Text>
            </View>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select your address"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.short_address}
                onValueChange={address => {
                  this.setShort_address(address);
                }}>
                {this.state.loadedShort_address.map(address => (
                  <Picker.Item
                    key={address}
                    label={this.capitalizeFirstLetter(address)}
                    value={address}
                  />
                ))}
              </Picker>
            </Item>
          </Form>
          <Button
            onPress={() => {
              let state = this.state;
              if (!state.short_address) {
                delete state.short_address;
              }
              delete state.loadedShort_address;

              return this.props.navigation.navigate('InputDescriptionView', {
                partialSearchTerm: state,
              });
            }}>
            <Text>Next</Text>
          </Button>
          <Button
            onPress={() => {
              let partialSearchTerm = this.state;
              delete partialSearchTerm.short_address;
              delete partialSearchTerm.loadedShort_address;
              console.log('partialSearchTerm', partialSearchTerm);

              return this.props.navigation.navigate('InputDescriptionView', {
                partialSearchTerm,
              });
            }}>
            <Text>Skip</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
