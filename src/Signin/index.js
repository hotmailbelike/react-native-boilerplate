import { createStackNavigator } from 'react-navigation-stack';

import SignInView from './SignInView';
import AboutView from '../About/AboutView';
import HelpView from '../Help/HelpView';

export default Drawnav = createStackNavigator(
  {
    SignInView: { screen: SignInView },
    AboutView: { screen: AboutView },
    HelpView: { screen: HelpView }
  },

  {
    initialRouteName: 'SignInView',
    // headerMode: 'none',
  },
);
// export default  OrderView
