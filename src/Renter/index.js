import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';


import RenterProfile from './RenterProfile';

export default Drawnav = createStackNavigator(
  {
    //SigninView: { screen: SignInView },
    //AboutView: { screen: AboutView },
    RenterProfile: { screen: RenterProfile },
  },
  {
    initialRouteName: 'RenterProfile',
  },
);
