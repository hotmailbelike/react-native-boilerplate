import {createStackNavigator} from 'react-navigation-stack';

import SpecificSearchView from './SpecificSearchView';
import SearchResultView from './SearchResultView';
import SingleSearchResultView from './SingleSearchResultView';

export default Drawnav = createStackNavigator(
  {
    SpecificSearchView: {screen: SpecificSearchView},
    SearchResultView: {screen: SearchResultView},
    SingleSearchResultView: {screen: SingleSearchResultView},
  },
  {
    initialRouteName: 'SpecificSearchView',
  },
);
