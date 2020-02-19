import { createStackNavigator } from 'react-navigation-stack';

import SignInView from './SignInView';
import AboutView from '../About/AboutView';
import HelpView from '../Help/HelpView';

import UserAccount from '../RenterForm/UserAccount';

export default Drawnav = createStackNavigator(
  {
    SignInView: { screen: SignInView },
    AboutView: { screen: AboutView },
    HelpView: { screen: HelpView },
    UserAccount: {screen: UserAccount},
  },

  {
    initialRouteName: 'SignInView',
    // headerMode: 'none',
  },
);
// export default  OrderView
