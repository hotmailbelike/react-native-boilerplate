import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
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

import CardView from '../CardView/CardView';

export default class InputRateView extends React.Component {
  state = {
    rate_monthly: {
      $lte: 88888888888888888888888888888888,
      $gte: 1,
    },
    searchResult: [],
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

    state = {...state, ...incomingState};
    this.setState({...state}, () => {
      console.log('mount', this.state);
    });
    // console.log('mount: ', this.state);
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <View>
              <Text>Set Monthly Rate Range: </Text>
            </View>
            <Item style={{marginBottom: 10}}>
              <View style={styles.row}>
                <Item style={styles.inputWrap}>
                  <Input
                    keyboardType="numeric"
                    placeholder="Minimum Rate"
                    onChangeText={text => {
                      const rate_monthly = {...this.state.rate_monthly};
                      rate_monthly.$gte = text;
                      return this.setState({rate_monthly});
                    }}
                  />
                </Item>
                <Item style={styles.inputWrap}>
                  <Input
                    keyboardType="numeric"
                    placeholder="Maximum Rate"
                    onChangeText={text => {
                      const rate_monthly = {...this.state.rate_monthly};
                      rate_monthly.$lte = text;
                      return this.setState({rate_monthly});
                    }}
                  />
                </Item>
              </View>
            </Item>
          </Form>
          <Button
            onPress={() => {
              let searchTerm = {...this.state};

              if (searchTerm.rate_monthly.$lte === '') {
                searchTerm.rate_monthly.$lte = 88888888888888888888888888888888;
              }
              if (searchTerm.rate_monthly.$gte == '') {
                searchTerm.rate_monthly.$gte = 1;
              }
              if (searchTerm.rate_monthly.$lte < searchTerm.rate_monthly.$gte) {
                searchTerm.rate_monthly.$lte = searchTerm.rate_monthly.$gte;
              }

              delete searchTerm.searchResult;

              // console.log('b4 send: ', searchTerm);

              return this.props.navigation.navigate('SearchResultView', {
                searchTerm: searchTerm,
              });
            }}>
            <Text>Show Search Result</Text>
          </Button>
          <Button
            onPress={() => {
              let searchTerm = {...this.state};
              delete searchTerm.rate_monthly;
              delete searchTerm.searchResult;
              console.log('b4 send: ', searchTerm);
              return this.props.navigation.navigate('SearchResultView', {
                searchTerm: searchTerm,
              });
            }}>
            <Text>Skip</Text>
          </Button>
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

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 1,
    // width: '70%',
    borderColor: '#cccccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '80%',
    marginLeft: 15,
  },
});
