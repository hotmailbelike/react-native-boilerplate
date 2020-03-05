import {createStackNavigator} from 'react-navigation-stack';

import GetStartedView from './GetStartedView';
import InputCategoryView from './InputCategoryView';
import InputShortAddressView from './InputShortAddressView';
import InputDescriptionView from './InputDescriptionView';
import InputRateView from './InputRateView';
import SearchResultView from './SearchResultView';
import SingleSearchResultView from './SingleSearchResultView';

export default Drawnav = createStackNavigator(
  {
    GetStartedView: {screen: GetStartedView},
    InputCategoryView: {screen: InputCategoryView},
    InputShortAddressView: {screen: InputShortAddressView},
    InputDescriptionView: {screen: InputDescriptionView},
    InputRateView: {screen: InputRateView},
    SearchResultView: {screen: SearchResultView},
    SingleSearchResultView: {screen: SingleSearchResultView},
  },
  {
    initialRouteName: 'GetStartedView',
  },
);
