import {createStackNavigator} from 'react-navigation-stack';
import RenterProfile2 from './RenterProfile2';
import UserAccount from './UserAccount';
export default Drawnav = createStackNavigator(
  {

    UserAccount:{screen: UserAccount},
    RenterProfile2: {screen: RenterProfile2},
    
  },

  {
   // initialRouteName: 'RenterProfile2',
    // headerMode: 'none',
  },
);
