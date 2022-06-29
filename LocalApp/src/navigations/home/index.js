import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home";
import ProductDetail from "../../screens/productDetails";
import FilterScreen from "../../screens/filterScreen";
const Stack = createNativeStackNavigator();
export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator
    screenOptions={{
        header:()=>null
    }}
    >
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="Detail" component={ProductDetail} />
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
}
