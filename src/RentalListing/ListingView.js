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
} from 'native-base';
import { Alert, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SingleListView from './SingleListView';


class ListingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, title: "Apartment", image: "https://img.icons8.com/clouds/100/000000/groups.png", price: 28000, location: "Bashundhara" },
                { id: 2, title: "3 Room Bed", image: "https://img.icons8.com/color/100/000000/real-estate.png", price: 25000, location: 'Uttara' },
                { id: 3, title: "Girls Hostel", image: "https://img.icons8.com/color/100/000000/find-matching-job.png", price: 15000, location: "Bashundhara" },
                { id: 4, title: "Flat at Uttara", image: "https://img.icons8.com/clouds/100/000000/employee-card.png", price: 35000, location: "Uttara" },
                { id: 5, title: "Near IUB", image: "https://img.icons8.com/color/100/000000/land-sales.png", price: 25000, location: "Bashundhara" },
            ]
        }
    }

    render() {
        const data = this.state.data;
        const rows = data.map((item) => {
            return(
                <TouchableOpacity key={item.id.toString()} onPress={() => {
                    this.props.navigation.navigate('SingleListView');
                }}>
                    <CardView title={item.title} image={item.image} location={item.location} price={item.price} />
                </TouchableOpacity>
            );
        })

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => {
                            Alert.alert('Okay', 'You press hamburger')
                        }}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Input style={{color: "#fff"}} placeholder="Search..." placeholderTextColor="#fff"/>
                    </Body>
                    <Right />
                </Header>
                <Content style={{padding: 5}}>
                    {rows}
                </Content>
            </Container>
        );
    }
}

class CardView extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Thumbnail source={{uri: this.props.image}}/>
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