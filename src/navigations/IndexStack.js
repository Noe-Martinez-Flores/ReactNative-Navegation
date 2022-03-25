import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../screens/Index';
import Training from "../screens/Training"
import Smart from '../screens/Smart';
import { Icon } from 'react-native-elements';
// import SmartGo from '../screens/SmartGo';
// import Profile from '../screens/Profile';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export default function IndexStack(props) {
  const {navigation} = props;

  return (
    <Stack.Navigator>
      <Stack.Screen name='index' component={Index}
        options={{
          
          title: "Home",
          
          headerLeft: () =>
            <Icon onPress={()=>navigation.openDrawer()} type='material-community' name='menu' size={22} color={"black"}></Icon>
        }}></Stack.Screen>
      <Stack.Screen name='training' component={Training} options={{ title: "Training" }}></Stack.Screen>
      <Stack.Screen name='smart' component={Smart} options={{ title: "Smart" }}></Stack.Screen>
      {/* <Stack.Screen name='smart-go' component={SmartGo} options = {{title : "SmartGo"}}></Stack.Screen>
        <Stack.Screen name='profile' component={Profile} options = {{title : "Profile"}}></Stack.Screen>  */}
        <Stack.Screen name='register' component={Register}></Stack.Screen>
    </Stack.Navigator>
  )
}