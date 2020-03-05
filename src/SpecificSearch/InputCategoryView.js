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

export default class InputCategoryView extends React.Component {
  state = {
    category: 'apartment',
  };

  setCategory = category => {
    this.setState({
      category,
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <View>
              <Text>What kind of item are you looking for?</Text>
            </View>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Select your category"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.category}
                onValueChange={category => {
                  this.setCategory(category);
                }}>
                <Picker.Item label="Apartment" value="apartment" />
                <Picker.Item label="Office" value="office" />
                <Picker.Item label="Shop" value="shop" />
                <Picker.Item label="Garage" value="garage" />
                <Picker.Item label="Others" value="others" />
              </Picker>
            </Item>
          </Form>
          <Button
            onPress={() => {
              if (!this.state.category) {
                let state = this.state;
                delete state.category;
                this.setState({...state});
              }

              return this.props.navigation.navigate('InputShortAddressView', {
                partialSearchTerm: this.state,
              });
            }}>
            <Text>Next</Text>
          </Button>
          <Button
            onPress={() => {
              let partialSearchTerm = this.state;
              delete partialSearchTerm.category;

              return this.props.navigation.navigate('InputShortAddressView', {
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
