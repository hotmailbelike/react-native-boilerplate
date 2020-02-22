import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';

import SignInView from '../Signin/SignInView';


export default Drawnav = createStackNavigator(
  {
    //SigninView: { screen: SignInView },
    //AboutView: { screen: AboutView },
    HelpView: { screen: HelpView },
  },
  {
    initialRouteName: 'HelpView',
  },
);
