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
  Text,
  Root,
} from 'native-base';
// import {/* createAppContainer, */ withNavigationFocus} from 'react-navigation';

import CardView from '../CardView/CardView';

export default class SearchResultView extends Component {
  state = {
    searchResult: [],
  };

  componentDidMount() {
    const {navigation} = this.props;
    let searchTerm = navigation.getParam('searchTerm', 'searchTerm');
    console.log('searchTerm: ', searchTerm);

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
        error => {
          console.log(error);
        },
      );
  }

  render() {
    return (
      <Root>
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
      </Root>
    );
  }

  /* 
  //why does it not work?
  <Root>
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
      </Root>
  
  
  */
}

//dont delete code below

// SearchResultView.navigationOptions = ({navigation}) => ({
//   header: (
//     <Header style={{backgroundColor: '#000000'}}>
//       <StatusBar backgroundColor="#000000" barStyle="light-content" />
//       <Left>
//         <Button transparent onPress={() => navigation.toggleDrawer()}>
//           <Icon style={{color: '#ffffff'}} name="menu" />
//         </Button>
//       </Left>
//       <Body>
//         <Title>Search Result</Title>
//       </Body>
//       <Right />
//     </Header>
//   ),
// });
