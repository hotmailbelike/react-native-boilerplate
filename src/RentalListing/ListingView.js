import React, { Component } from 'react';
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
    StatusBar,Title
} from 'native-base';
import { Alert, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SingleListView from './SingleListView';


class ListingView extends Component {


    constructor(props) {
        super(props);
        this.state = {
            rentList_dummy: [
                { id: 1, title: "Apartment", image: "https://img.icons8.com/clouds/100/000000/groups.png", price: 28000, location: "Bashundhara" },
                { id: 2, title: "3 Room Bed", image: "https://img.icons8.com/color/100/000000/real-estate.png", price: 25000, location: 'Uttara' },
                { id: 3, title: "Girls Hostel", image: "https://img.icons8.com/color/100/000000/find-matching-job.png", price: 15000, location: "Bashundhara" },
                { id: 4, title: "Flat at Uttara", image: "https://img.icons8.com/clouds/100/000000/employee-card.png", price: 35000, location: "Uttara" },
                { id: 5, title: "Near IUB", image: "https://img.icons8.com/color/100/000000/land-sales.png", price: 25000, location: "Bashundhara" },
            ],
            error: null, isLoaded: false, rentList: []
        }
    }

    componentDidMount() {
        fetch('https://rentalvr.herokuapp.com/api/rentListings')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        rentList: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true, error
                    })
                }
            )
    }

//     interested_people: []
// _id: "5e37ccfbc3bf660017f525c6"
// renter_name: "Test user 2"
// title: "test user 2"
// category: "test"
// short_address: "test user 2"
// long_address: "test user 2"
// rate_monthly: 25
// conditions: "test user 2"
// status: true
// description: "test user 2"
// images: []
// created: "2020-02-03T07:34:19.946Z"
// renter: "5e37cc9cc3bf660017f525c5"    

    render() {
        const data = this.state.rentList;
        const rows = data.map((item) => {
            return (
                <TouchableOpacity key={item._id.toString()} onPress={() => {
                    this.props.navigation.navigate('SingleListView', {
                        rentalDetails: item
                    });
                }}>
                    <CardView title={item.title}
                    // image={item.image} 
                    location={item.short_address} price={item.rate_monthly} />
                </TouchableOpacity>
            );
        })

        return (
            <Root>
                <Container>
                    <Content style={{ padding: 5 }}>
                        {rows}
                    </Content>
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
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right />
      </Header>
    ),
  });

class CardView extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Thumbnail source={{ uri: this.props.image }} />
                    <Text>{this.props.title}</Text>
                    {/* <Text>{this.props.location}</Text> */}
                    {/* <Text>{this.props.price}</Text> */}
                </CardItem>
            </Card>
        );
    }
}

const ListNavigator = createStackNavigator(
    {
        ListingView: {
            screen: ListingView,
            navigationOptions: {
                headerShown: false,
            }
        },
        SingleListView: {
            screen: SingleListView,
            navigationOptions: {
                title: 'Details',
                headerShown: true,
            }
        }
    }
);

export default createAppContainer(ListNavigator);