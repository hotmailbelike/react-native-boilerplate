import {createStackNavigator} from 'react-navigation-stack';

import SpecificSearchView from './SpecificSearchView';

export default Drawnav = createStackNavigator(
  {
    SpecificSearchView: {screen: SpecificSearchView},
  },
  {
    initialRouteName: 'SpecificSearchView',
  },
);
