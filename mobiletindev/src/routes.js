import { createAppContainer, createSwitchNavigator } from 'react-native';

import Login from './pages/login';
import Main from './pages/main';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
  })
);

