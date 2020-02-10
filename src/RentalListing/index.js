import {createStackNavigator} from 'react-navigation-stack';
import ListingView from './ListingView';
import SingleListView from './SingleListView';

export default Drawnav = createStackNavigator(
  {
    ListingView: {screen: ListingView},
    SingleListView: {
      screen: SingleListView,
    },
  },

  {
    initialRouteName: 'ListingView',
    // headerMode: 'none',
  },
);
