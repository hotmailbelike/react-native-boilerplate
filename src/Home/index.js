import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SignInView from '../Signin/index';
import Sidebar from '../Sidebar/index';
import SettingsView from '../Settings/index';
import AboutView from '../About/index';
import HelpView from '../Help/index';
import SignUpView from '../SignUp/index';
import Form1 from '../Form1/index';
import SpecificSearch from '../Search/index';

const HomeRouter = createDrawerNavigator(
  {
    SignInView: {
      screen: SignInView,
    },
    SettingsView: {
      screen: SettingsView,
    },
    AboutView: {
      screen: AboutView,
    },
    HelpView: {
      screen: HelpView,
    },
    SignUpView: {
      screen: SignUpView,
    },
    Form1: {
      screen: Form1,
    },
    SpecificSearch: {
      screen: SpecificSearch,
    },
  },

  {
    initialRouteName: 'SignInView',
    // headerMode: 'none',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <Sidebar {...props} />,
  },
);

export default createAppContainer(HomeRouter);
