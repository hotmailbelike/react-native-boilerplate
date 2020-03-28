import React, {Component} from 'react';
import {Drawer} from 'native-base';
import {createStackNavigator} from 'react-navigation-stack';

import Form1 from './Form1';

export default Drawnav = createStackNavigator(
  {
    //SigninView: { screen: SignInView },
    //AboutView: { screen: AboutView },
    Form1: {screen: Form1},
  },
  {
    initialRouteName: 'Form1',
  },
);
