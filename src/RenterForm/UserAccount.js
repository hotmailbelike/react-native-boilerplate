import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';


export default class UserAccount extends Component {
  render() {
    return (
      <Container>
       
        <Content>
        <Button  onPress={() => {
                      this.props.navigation.navigate('RenterProfile2');
                           }} >
                           <Text>Renter</Text>
                    </Button>
        {/* <Button full success>
            <Text>Renter</Text>
          </Button> */}
          <Button full danger>
            <Text>Rentee</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}