import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Item,
  Input,
  View,
  Form,
} from 'native-base';

import CardView from '../CardView/CardView';

export default class InputDescriptionView extends React.Component {
  state = {
    description: '',
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
              <Text>Describe it as much as you can</Text>
            </View>
            <Item style={{marginBottom: 10}}>
              <Input
                placeholder="Describe please..."
                onChangeText={text =>
                  this.setState({description: text}, () => {
                    console.log(this.state.description);
                  })
                }
              />
            </Item>
          </Form>
          <Button
            onPress={() => {
              let state = {...this.state};
              if (!this.state.description) {
                delete state.description;
              }
              delete state.searchResult;

              return this.props.navigation.navigate('InputRateView', {
                partialSearchTerm: state,
              });
            }}>
            <Text>Next</Text>
          </Button>
          <Button
            onPress={() => {
              let partialSearchTerm = {...this.state};
              delete partialSearchTerm.description;
              delete partialSearchTerm.searchResult;
              return this.props.navigation.navigate('InputRateView', {
                partialSearchTerm,
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

const styles = StyleSheet.create({});
