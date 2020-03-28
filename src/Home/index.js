import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SignInView from '../Signin/index';
import Sidebar from '../Sidebar/index';
import SettingsView from '../Settings/index';
import AboutView from '../About/index';
import HelpView from '../Help/index';
import SignUpView from '../SignUp/index';
import RenterProfile from '../AddListing/index';
import SpecificSearch from '../Search/index';
import SpecificSearch2 from '../SpecificSearch/index';

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
    RenterProfile: {
      screen: RenterProfile,
    },
    SpecificSearch: {
      screen: SpecificSearch,
    },
    SpecificSearch2: {
      screen: SpecificSearch2,
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
