import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
const HomeRouter = createDrawerNavigator();
//   {
//     OrderView: {
//       screen: OrderView,
//     },
//     ItemsView: {
//       screen: ItemsView,
//     },
//     ReportView: {
//       screen: ReportView,
//     },
//     SettingsView: {
//       screen: SettingsView,
//     },
//     InfoView: {
//       screen: InfoView,
//     },
//   },
//   {
//     initialRouteName: 'OrderView',
//     // headerMode: 'none',
//     contentOptions: {
//       activeTintColor: '#e91e63',
//     },
//   },
export default createAppContainer(HomeRouter);
