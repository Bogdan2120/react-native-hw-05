import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import PostScreen from "./PostsScreen";
import MapScreen from "./MapScreen";
import CommentsScreen from "./CommentsScreen";

const NestedScreen = createStackNavigator();
const Home = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Post"
        component={PostScreen}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen name="Map" component={MapScreen} />
      <NestedScreen.Screen name="Coments" component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
};

export default Home;
