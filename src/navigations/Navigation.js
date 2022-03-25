import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
//import Index from '../screens/Index';
import IndexStack from "./IndexStack";
// import Profile from '../screens/Profile';
// import Smart from '../screens/Smart';
// import SmartGo from '../screens/SmartGo';

// import SmartStack from "./SmartStack"
// import SmartStackGo from './SmartStackGo';
// import ProfileStack from "./ProfileStack"

import SmartStack from "./SmartStack";
import SmartStackGo from "./SmartStackGo";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="index"
        tabBarOptions={{ inactiveTintColor: "gray", activeTintColor: "#2E9AFE" }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOption(route, color),
        })}
      >
        <Tab.Screen
          name="index"
          component={IndexStack}
          options={{ title: "Home" }}
        ></Tab.Screen>
        <Tab.Screen
          name="smart"
          component={SmartStack}
          options={{ title: "Smart" }}
        ></Tab.Screen>
        <Tab.Screen
          name="smart-go"
          component={SmartStackGo}
          options={{ title: "SmartGo" }}
        ></Tab.Screen>
        <Tab.Screen
          name="profile"
          component={ProfileStack}
          options={{ title: "Profile" }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOption(route, color) {
  let icono;

  switch (route.name) {
    case "index":
      icono = "view-grid-outline";
      break;
    case "smart":
      icono = "weight-lifter";
      break;

    case "smart-go":
      icono = "google";
      break;

    case "profile":
      icono = "account-outline";
      break;

    default:
      break;
  }

  return (
    <Icon type="material-community" name={icono} size={22} color={color}></Icon>
  );
}
