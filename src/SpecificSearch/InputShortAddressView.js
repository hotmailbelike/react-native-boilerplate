import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Item,
  View,
  Picker,
  Form,
} from 'native-base';

import CardView from '../CardView/CardView';

export default class InputShortAddressView extends React.Component {
  state = {
    short_address: '',
    loadedShort_address: [],
    searchResult: [],
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

    fetch('https://rentalvr.herokuapp.com/api/rentListings/specificSearch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(incomingState),
    })
      .then(res => res.json())
      .then(
        result => {
          if (result.length > 0) {
            let searchResult = result.map(list => ({
              id: list._id,
              title: list.title,
            }));
            this.setState({searchResult});
          } else {
            this.setState({searchResult: [{id: 0, title: 'No Result :('}]});
          }
        },
        e => {
          console.log(e);
        },
      );

    // if (
    //   !this.state.loadedShort_address ||
    //   this.state.loadedShort_address.length <= 0
    // ) {
    //   let state = this.state;
    //   state.loadedShort_address = [];
    // }

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
    // console.log('state: ', this.state.loadedShort_address);
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
            <Button
              onPress={() => {
                let state = {...this.state};
                if (!state.short_address) {
                  delete state.short_address;
                }
                delete state.loadedShort_address;
                delete state.searchResult;

                return this.props.navigation.navigate('InputDescriptionView', {
                  partialSearchTerm: state,
                });
              }}>
              <Text>Next</Text>
            </Button>
            <Button
              onPress={() => {
                let partialSearchTerm = {...this.state};
                delete partialSearchTerm.short_address;
                delete partialSearchTerm.loadedShort_address;
                delete partialSearchTerm.searchResult;
                console.log('partialSearchTerm', partialSearchTerm);

                return this.props.navigation.navigate('InputDescriptionView', {
                  partialSearchTerm,
                });
              }}>
              <Text>Skip</Text>
            </Button>
          </Form>
          <View>
            <Container>
              <Content style={{padding: 5}}>
                {this.state.searchResult.map(item => (
                  <TouchableOpacity
                    key={item.id.toString()}
                    onPress={() => {
                      this.props.navigation.navigate('SingleSearchResultView', {
                        rentId: item.id,
                      });
                    }}>
                    <CardView title={item.title}></CardView>
                  </TouchableOpacity>
                ))}
              </Content>
            </Container>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
