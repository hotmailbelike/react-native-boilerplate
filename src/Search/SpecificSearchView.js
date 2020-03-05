import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Text,
  Item,
  View,
  Form,
  Input,
  Root,
  Picker,
  Icon,
} from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//import { withNavigationFocus } from 'react-navigation'

class SpecificSearchView extends React.Component {
  state = {
    category: 'apartment',
    /* area: '', */
    short_address: '',
    description: '',
    title: '',
    rate_monthly: {
      $lte: 88888888888888888888888888888888,
      $gte: 1,
    },
  };
  onValueChange2(value) {
    this.setState({
      category: value,
    });
  }
  handleSearch = () => {
    // console.log('state: ', this.state);
    let searchTerm = this.state;

    if (searchTerm.rate_monthly.$lte === '') {
      searchTerm.rate_monthly.$lte = 88888888888888888888888888888888;
    }
    if (searchTerm.rate_monthly.$gte == '') {
      searchTerm.rate_monthly.$gte = 1;
    }

    Object.keys(searchTerm).forEach(
      key =>
        (searchTerm[key] == null ||
          searchTerm[key] == '' ||
          searchTerm[key] == undefined) &&
        delete searchTerm[key],
    );
    // console.log('searchTerm ', searchTerm);
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
          let searchResult = result.map(list => ({
            id: list._id,
            title: list.title,
          }));

          this.props.navigation.navigate('SearchResultView', {
            searchResult: searchResult,
          });
        },
        error => {
          console.log(error);
        },
      );
  };

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
                    style={{width: undefined}}
                    placeholder="Select your category"
                    placeholderStyle={{color: '#bfc6ea'}}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.category}
                    onValueChange={this.onValueChange2.bind(this)}>
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
                  onChangeText={text => this.setState({short_address: text})}
                />
              </Item>

              <Item style={{marginBottom: 10}}>
                <Input
                  placeholder="Describe please..."
                  onChangeText={text => this.setState({description: text})}
                />
              </Item>
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

export default withNavigationFocus(SpecificSearchView);
