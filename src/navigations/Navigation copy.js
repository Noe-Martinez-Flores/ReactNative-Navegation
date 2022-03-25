import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import IndexStack from './IndexStack';
import SmartStack from './SmartStack';
import ProfileStack from './ProfileStack';
import { Icon } from 'react-native-elements';


const Drawer = createDrawerNavigator();

export default function Navigation2() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = 'index' component={IndexStack} 
        options = {{title : "Home", drawerIcon:()=> <Icon type='material-community' size={22} name = "home" color={"black"}></Icon>}}></Drawer.Screen>
        <Drawer.Screen name = 'smart' component={SmartStack} 
        options = {{title : "Smart", drawerIcon:()=> <Icon type='material-community' size={22} name = "weight-lifter" color={"black"}></Icon>}}></Drawer.Screen>
        <Drawer.Screen name = 'profile' component={ProfileStack} 
        options = {{title : "Profile", drawerIcon:()=> <Icon type='material-community' size={22} name = "account-outline" color={"black"}></Icon>}}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
