import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';

export default createStackNavigator({
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false, }
}
);
