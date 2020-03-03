import React, {Component} from 'react';
import {
  /* StyleSheet, Image, */ StatusBar,
  TouchableOpacity,
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

export default class SearchResultView extends Component {
  state = {
    searchResult: '',
  };

  componentDidMount() {
    const {navigation} = this.props;
    // console.log(navigation.getParam('searchResult', 'searchResult'));
    this.setState({
      searchResult: navigation.getParam('searchResult', 'searchResult'),
    });
    console.log('SearchResult: ', this.state.searchResult);
  }

  render() {
    console.log('searchResult: ', this.state.searchResult);

    return (
      <Root>
        <Container>
          <Content style={{padding: 5}}>
            {this.state.searchResult.length > 0 ? (
              this.state.searchResult.map(item => (
                <TouchableOpacity
                  key={item.id.toString()}
                  onPress={() => {
                    this.props.navigation.navigate('SingleSearchResultView', {
                      rentId: item.id,
                    });
                  }}>
                  <CardView title={item.title}></CardView>
                </TouchableOpacity>
              ))
            ) : (
              <Text>{'No result :('}</Text>
            )}
          </Content>
        </Container>
      </Root>
    );
  }
}

class CardView extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Text>{this.props.title}</Text>
        </CardItem>
      </Card>
    );
  }
}

SearchResultView.navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{backgroundColor: '#000000'}}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Left>
        <Button transparent onPress={() => navigation.toggleDrawer()}>
          <Icon style={{color: '#ffffff'}} name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Search Result</Title>
      </Body>
      <Right />
    </Header>
  ),
});
