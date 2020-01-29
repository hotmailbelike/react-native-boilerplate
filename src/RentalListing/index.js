import { createStackNavigator } from 'react-navigation-stack';
import ListingView from './ListingView';

export default (Drawnav = createStackNavigator(
    {
      ListingView: {screen: ListingView},
    },
  
    {
      initialRouteName: 'ListingView',
      // headerMode: 'none',
    },
  ))