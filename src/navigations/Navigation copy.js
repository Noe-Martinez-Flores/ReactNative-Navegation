import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
//import Index from '../screens/Index';
import IndexStack from './IndexStack';
// import Profile from '../screens/Profile';
// import Smart from '../screens/Smart';
// import SmartGo from '../screens/SmartGo';

// import SmartStack from "./SmartStack"
// import SmartStackGo from './SmartStackGo';
// import ProfileStack from "./ProfileStack"

import SmartStack from './SmartStack';
import SmartStackGo from './SmartStackGo';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

function screenOption(route, color) {
  let icono;

  switch (route.name) {
    case "index":
      icono = "view-grid-outline"
      break;
    case "smart":
      icono = "weight-lifter"
      break;

    case "smart-go":
      icono = "google"
      break;

    case "profile":
      icono = "account-outline"
      break;

    default:
      break;
  }


  return (
    <Icon type = 'material-community' name = {icono} size={22} color = {color}></Icon>
  )
}
