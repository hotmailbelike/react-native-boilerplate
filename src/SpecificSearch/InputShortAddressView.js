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

export default class InputShortAddressView extends React.Component {
  state = {
    short_address: '',
  };

  componentDidMount() {
    const {navigation} = this.props;
    let state = this.state;
    let incomingState = navigation.getParam(
      'partialSearchTerm',
      'partialSearchTerm',
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
              <Text>Which Area/Location do you want to rent from?</Text>
            </View>
            <Item style={{marginBottom: 10}}>
              <Input
                placeholder="Area"
                onChangeText={text =>
                  this.setState({short_address: text}, () => {
                    console.log(this.state);
                  })
                }
              />
            </Item>
          </Form>
          <Button
            onPress={() => {
              if (!this.state.short_address) {
                let state = this.state;
                delete state.short_address;
                this.setState({...state});
              }

              return this.props.navigation.navigate('InputDescriptionView', {
                partialSearchTerm: this.state,
              });
            }}>
            <Text>Next</Text>
          </Button>
          <Button
            onPress={() => {
              let partialSearchTerm = this.state;
              delete partialSearchTerm.short_address;
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
