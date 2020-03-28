import {createStackNavigator} from 'react-navigation-stack';

import Form2 from './Form2';

export default Drawnav = createStackNavigator(
  {
    Form2: {screen: Form2},
  },
  {
    initialRouteName: 'Form2',
  },
);
