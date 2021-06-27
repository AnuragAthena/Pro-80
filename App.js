import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen'
import Exchange from './screens/Exchange';
import { AppTabNavigator } from './components/AppTabNavigator';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
export default function App() {
  return (
    <AppContainer/>
  );
}



const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab:{screen: AppTabNavigator},
  Drawer:{screen: AppDrawerNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
