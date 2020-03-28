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
  Icon,
  Text,
} from 'native-base';

export default class InputCategoryView extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Content>
          <Item>
            <Text>What kind of Item are you exactly looking for?</Text>
            <Input
              placeholder="Category"
              onChangeText={text => {
                let rate_monthly = {...this.state.rate_monthly};
                rate_monthly.$lte = text;
                return this.setState({rate_monthly});
              }}
            />
          </Item>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
