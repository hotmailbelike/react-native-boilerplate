// import React, { Component } from 'react';
// import { Drawer } from 'native-base';
import {createStackNavigator} from 'react-navigation-stack';

// import SignInView from '../Signin/SignInView';
// import AboutView from '../About/AboutView';
import HelpView from './HelpView';

export default Drawnav = createStackNavigator(
  {
    //SigninView: { screen: SignInView },
    //AboutView: { screen: AboutView },
    HelpView: {screen: HelpView},
  },
  {
    initialRouteName: 'HelpView',
  },
);
