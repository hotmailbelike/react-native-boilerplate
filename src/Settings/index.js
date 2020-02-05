import React, {Component} from 'react';
import SettingsView from './SettingsView.js';
import {createStackNavigator} from 'react-navigation-stack';
import {Drawer} from 'native-base';
export default Drawnav = createStackNavigator(
  {
    SettingsView: {screen: SettingsView},
  },

  {
    initialRouteName: 'SettingsView',
    // headerMode: 'none',
  },
);
// export default  SettingsView
