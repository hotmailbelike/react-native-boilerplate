import {createStackNavigator} from 'react-navigation-stack';

import GetStartedView from './GetStartedView';

export default Drawnav = createStackNavigator(
  {GetStartedView: {screen: GetStartedView}},
  {
    initialRouteName: 'GetStartedView',
  },
);
