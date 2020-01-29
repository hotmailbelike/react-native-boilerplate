import React, { Component } from 'react';
import { Container, Text } from 'native-base';

export default class SingleListView extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return(
            <Container>
                <Text>
                Single List View
                </Text>
            </Container>
        );
    }
}