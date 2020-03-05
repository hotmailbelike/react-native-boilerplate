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

export default class InputDescriptionView extends React.Component {
  state = {
    description: '',
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
              if (!this.state.description) {
                let state = this.state;
                delete state.description;
                this.setState({...state});
              }

              return this.props.navigation.navigate('InputRateView', {
                partialSearchTerm: this.state,
              });
            }}>
            <Text>Next</Text>
          </Button>
          <Button
            onPress={() => {
              let partialSearchTerm = this.state;
              delete partialSearchTerm.description;
              return this.props.navigation.navigate('InputRateView', {
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
