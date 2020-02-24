import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';


import AddListing from './AddListing';

export default Drawnav = createStackNavigator(
  {
    //SigninView: { screen: SignInView },
    //AboutView: { screen: AboutView },
    AddListing: { screen: AddListing },
  },
  {
    initialRouteName: 'AddListing',
  },
);
