import React, { Component } from 'react';
import { Container, Text, Thumbnail } from 'native-base';

export default class SingleListView extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { navigation } = this.props;
        const rentalDetails = navigation.getParam('rentalDetails', 'rentalDetails');
        console.log(rentalDetails)
        return(
            <Container>
                <Text> {rentalDetails.title} </Text>
                <Text> {rentalDetails.rate_monthly} </Text>
                {/* <Thumbnail source={{uri: rentalDetails.image}} /> */}
                <Text> {rentalDetails.short_address} </Text>
            </Container>
        );
    }
}