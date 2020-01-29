import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import ListingView from '../RentalListing/ListingView';


const HomeRouter = createDrawerNavigator(
  {
    ListingView: {
      screen: ListingView,
    },
  },
  {
    initialRouteName: 'ListingView',
    // headerMode: 'none',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  },
);
export default createAppContainer(HomeRouter);
