import {createStackNavigator} from 'react-navigation-stack';

import SignUpView from './SignUpView';

export default Drawnav = createStackNavigator(
  {
    SignUpView: {screen: SignUpView},
  },

  {
    initialRouteName: 'SignUpView',
    // headerMode: 'none',
  },
);
