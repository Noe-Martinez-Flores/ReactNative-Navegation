import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../screens/Profile';
import Location from '../screens/Location';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="profile" component={Profile} options = {{title : "Profiles"}}></Stack.Screen>
        <Stack.Screen name='location' component={Location} options = {{title : "Ubicación"}} />
    </Stack.Navigator>
  )
}