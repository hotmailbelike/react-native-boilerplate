import {createStackNavigator} from 'react-navigation-stack';

import SpecificSearchView from './SpecificSearchView';
import SearchResultView from './SearchResultView';

export default Drawnav = createStackNavigator(
  {
    SpecificSearchView: {screen: SpecificSearchView},
    SearchResultView: {screen: SearchResultView},
  },
  {
    initialRouteName: 'SpecificSearchView',
  },
);
