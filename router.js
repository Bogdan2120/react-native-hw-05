import React from "react";
import {
  StyleSheet,
  View,
  Imageu,
  TouchableOpacity,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import CreatePostScreen from "./screens/CreatePostsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PostsScreen from "./screens/PostsScreen";

const Stack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

export const useRoute = (isAuth = null) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    );
  }

  return (
    <MainTabs.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={require("./assets/images/Home.png")} />
          ),
          headerRight: () => (
            <View style={{ paddingRight: 20 }}>
              <TouchableOpacity onPress={() => alert("Log out")}>
                <Image source={require("./assets/images/LogOut.png")} />
              </TouchableOpacity>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <MainTabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={require("./assets/images/NewPost.png")} />
          ),
        }}
        name="CreatePost"
        component={CreatePostScreen}
      />
      <MainTabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={require("./assets/images/User.png")} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTabs.Navigator>
  );
};
