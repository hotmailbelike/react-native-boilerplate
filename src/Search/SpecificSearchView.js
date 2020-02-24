import React, {Component} from 'react';
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
  View,
  Form,
  Input,
  Root,
  Picker

} from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//import { withNavigationFocus } from 'react-navigation'

export default class SpecificSearchView extends React.Component {
    state = {
    category: 'Apartment',
    area:'',
    short_address: '',
    description: '',
    title: '',
    rate_monthly: '',
  };
  onValueChange2(value: string) {
    this.setState({
      category: value
    });
  }
  handleSearch = () => {
    const searchTerm = {searchTerm: this.state.short_address};
    fetch('https://rentalvr.herokuapp.com/api/rentListings/specificSearch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(searchTerm),
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            searchResult: result.map(list => ({
              id: list._id,
              title: list.title,
            })),
          });
          console.log(this.state.searchResult)
        },
        error => {
          this.setState({isLoaded: false, error});
        },
      );
  };
  // static navigationOptions = {
  //   drawerLabel: 'Search',
  //   drawerIcon: ({tintColor}) => (
  //     <Image
  //       // source={require('../../assets/Blackbird.jpg')}
  //       //   style={[styles.icon, { tintColor: tintColor }]}
  //       style={{width: 30, height: 30}}
  //     />
  //   ),
  // };
  /* 
  state = {
    category: '',
    short_address: '',
    description: '',
    title: '',
    rate_monthly: {
      $gte: '',
      $lte: '',
    },
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Category"
                onChangeText={text => this.setState({category: text})}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Area"
                onChangeText={text => this.setState({short_address: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Describe"
                onChangeText={text => this.setState({description: text})}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Title"
                onChangeText={text => this.setState({title: text})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Minimum Rent"
                onChangeText={text => {
                  let rate_monthly = {...this.state.rate_monthly};
                  rate_monthly.$gte = text;
                  return this.setState({rate_monthly});
                }}
              />
            </Item>
            <Item>
              <Input
                placeholder="Maximum Rent"
                onChangeText={text => {
                  let rate_monthly = {...this.state.rate_monthly};
                  rate_monthly.$lte = text;
                  return this.setState({rate_monthly});
                }}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
   */

  render() {
    return (
     
        <Root>
        <Container>
          <Content>
            <Form>
              <Item style={{marginBottom: 10}}>
               <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your category"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.category}
                onValueChange={this.onValueChange2.bind(this)}                
              >
                <Picker.Item label="Apartment" value="apartment" />
                <Picker.Item label="Office" value="office" />
                <Picker.Item label="Shop" value="shop" />
                <Picker.Item label="Garage" value="garage" />
                <Picker.Item label="Others" value="others" />
              </Picker>
            </Item>
              </Item>
              <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="Area"
                  onChangeText={text => this.setState({area: text})}
                />
              </Item>
              <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="Location"
                  onChangeText={text => this.setState({short_address: text})}
                />
              </Item>
               <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="Monthly Rate"
                  onChangeText={text => this.setState({rate_monthly: text})}
                />
              </Item>

              <View style={this.state.error && styles.signInError}>
                <Text style={{color: '#ff0000'}}>
                  {this.state.error && this.state.error}
                </Text>
              </View>

              <Button block danger onPress={this.handleSearch}>
                <Text>Search</Text>
              </Button>

              {/* <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('UserAccount');
                           }} >
                         <Text>Sign IN</Text>
                    </TouchableOpacity> */}
              {/* <Button  onPress={() => {
                      this.props.navigation.navigate('UserAccount');
                           }} >
                           <Text>Sign IN</Text>
                    </Button> */}
            </Form>
          </Content>
        </Container>
      </Root>
     
    );
  }
}





SpecificSearchView.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Searchhh</Title>
      </Body>
      <Right />
    </Header>
  ),
});




const styles = StyleSheet.create({});
