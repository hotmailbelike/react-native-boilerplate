import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Drawer} from 'native-base';

import AboutView from './AboutView';
import SignInView from '../Signin/SignInView';
import HelpView from '../Help/HelpView';

export default Drawnav = createStackNavigator(
  {
    SignIn: {screen: SignInView},
    AboutView: {screen: AboutView},
    HelpView: {screen: HelpView},
  },

  {
    initialRouteName: 'AboutView',
    // headerMode: 'none',
  },
);
// export default  SettingsView
