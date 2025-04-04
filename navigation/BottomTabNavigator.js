// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import TabFourScreen from "../screens/TabFourScreen";
import TabFiveScreen from "../screens/TabFiveScreen";
import { StyledImage } from "../styles/BottomNavigationIcon";
import { useLoadedTheme } from "../hooks/useLoadedTheme";
 
import React from 'react';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const [theme] = useLoadedTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarStyle: { backgroundColor: theme === Colors.light ? "#12141C" : "#42141C", borderTopWidth: 0 },
        tabBarLabelStyle: { weight: 100 },
      }}
    >
      <BottomTab.Screen
        name="Shope"
        component={TabOneNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bag-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Comuniti"
        component={TabTwoNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={TabThreeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="chatbubble-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Secure"
        component={TabFourNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shield-outline" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={TabFiveNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <StyledImage source={require('../assets/images/Rust.png')} />),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTransparent: true,
          headerTitleStyle: {
            color: "#FFFFFF",
            fontSize: 28,
          },
          headerTitle: "Store",
          headerLeft: () => (
            <StyledImage style={{ marginLeft: 15 }} source={require('../assets/images/steam_logo.png')} />
          ),
          headerRight: () => (
            <Ionicons name="search-outline" size={30} style={{ marginHorizontal: 15, color: "#555B6F" }} />
          ),
        }}

      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoTitle"
        component={TabTwoScreen}
        options={{ headerTitle: "Community" }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: "Chat" }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{ headerTitle: "Safaty" }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator();

function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="TabFiveScreen"
        component={TabFiveScreen}
        options={{ headerTitle: "" }}
      />
    </TabFiveStack.Navigator>
  );
}
