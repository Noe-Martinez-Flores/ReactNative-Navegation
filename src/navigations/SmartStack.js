import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Smart from '../screens/Smart';

const Stack = createStackNavigator();

export default function SmartStack() {
  return (
    <Stack.Navigator>
      
        <Stack.Screen name='smart' component={Smart} options = {{title : "Smart"}}></Stack.Screen>
       
    </Stack.Navigator>
  )
}