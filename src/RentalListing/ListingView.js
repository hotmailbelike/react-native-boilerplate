import React, {Component} from 'react';
import {
  /* StyleSheet, Image, */ StatusBar,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {
  Container,
  Header,
  Card,
  CardItem,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Input,
  Thumbnail,
  Root,
  Title,
  Item,
  View,
} from 'native-base';
import {/* createAppContainer, */ withNavigationFocus} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// import SingleListView from './SingleListView';

import CardView from '../CardView/CardView';

class ListingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rentList: [],
      searchQuery: '',
      searchResult: [],
      refresh: false,
    };
  }

  renderList = () => {
    this.setState({searchResult: []});
    fetch('https://rentalvr.herokuapp.com/api/rentListings', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            rentList: result.map(list => ({id: list._id, title: list.title})),
          });
        },
        error => {
          this.setState({
            isLoaded: false,
            error,
          });
        },
      );
  };

  componentDidMount() {
    this.renderList();
  }

  onRefresh() {
    this.setState({refresh: true});
    setTimeout(() => {
      this.renderList();
      this.setState({refresh: false});
    }, 1000);
  }

  toBeRendered = renderItems => {
    return renderItems.map(item => {
      return (
        <RefreshControl
          refreshing={this.state.refresh}
          onRefresh={() => this.onRefresh()}>
          <TouchableOpacity
            key={item.id.toString()}
            onPress={() => {
              this.props.navigation.navigate('SingleListView', {
                rentId: item.id,
              });
            }}>
            <CardView
              title={item.title}
              // image={item.image}
              // location={item.short_address}
              // price={item.rate_monthly}
            />
          </TouchableOpacity>
        </RefreshControl>
      );
    });
  };

  handleSearch = () => {
    const searchTerm = {searchTerm: this.state.searchQuery};
    fetch('https://rentalvr.herokuapp.com/api/rentListings/generalSearch', {
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
        },
        error => {
          this.setState({isLoaded: false, error});
        },
      );
  };

  render() {
    // console.log('rentList: ', this.state.rentList);
    // console.log('searchResult: ', this.state.searchResult);
    // console.log('query: ', this.state.searchQuery);
    const rows =
      this.state.searchResult.length > 0
        ? this.toBeRendered(this.state.searchResult)
        : this.toBeRendered(this.state.rentList);

    return (
      <Root>
        <Container>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '70%'}} searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input
                  placeholder="Search"
                  onChangeText={text =>
                    text === ''
                      ? this.setState({searchResult: []})
                      : this.setState({searchQuery: text})
                  }
                />
                {/* <Icon name="ios-people" /> */}
              </Item>
            </View>
            <View style={{width: '25%'}}>
              <Button onPress={this.handleSearch}>
                <Text>Search</Text>
              </Button>
            </View>
          </View>
          <Content style={{padding: 5}}>{rows}</Content>
        </Container>
      </Root>
    );
  }
}

ListingView.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.toggleDrawer()}>
          <Icon style={{color: '#ffffff'}} name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Listing View</Title>
      </Body>
      <Right />
    </Header>
  ),
});

export default withNavigationFocus(ListingView);
