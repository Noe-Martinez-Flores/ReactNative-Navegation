import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../screens/Index';
import Training from  "../screens/Training"
// import Smart from '../screens/Smart';
// import SmartGo from '../screens/SmartGo';
// import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export default function IndexStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='index' component={Index} options = {{title : "Home"}}></Stack.Screen>
        <Stack.Screen name='trainig' component={Training} options = {{title : "Training"}}></Stack.Screen>
        {/* <Stack.Screen name='smart' component={Smart} options = {{title : "Smart"}}></Stack.Screen>
        <Stack.Screen name='smart-go' component={SmartGo} options = {{title : "SmartGo"}}></Stack.Screen>
        <Stack.Screen name='profile' component={Profile} options = {{title : "Profile"}}></Stack.Screen> */}
    </Stack.Navigator>
  )
}