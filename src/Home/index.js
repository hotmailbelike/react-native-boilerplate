import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SignInView from '../Signin/index';
import Sidebar from '../Sidebar/index';
import SettingsView from '../Settings/index';
import AboutView from '../About/index';
import HelpView from '../Help/index';
import ListingView from '../RentalListing/index';
import SignUpView from '../SignUp/index';
import RenterProfile from '../Renter/index';
const HomeRouter = createDrawerNavigator(
  {
    ListingView: {
      screen: ListingView,
    },
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
    RenterProfile: {
      screen: RenterProfile,
    },
  },

  {
    initialRouteName: 'ListingView',
    // headerMode: 'none',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <Sidebar {...props} />,
  },
);

export default createAppContainer(HomeRouter);
