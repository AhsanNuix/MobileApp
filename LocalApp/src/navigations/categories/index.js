import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../../screens/categories";
import FilterScreen from "../../screens/filterScreen";
import ProductDetail from "../../screens/productDetails/index"
const Stack = createNativeStackNavigator();
export default function CategoryScreenNavigation() {
  return (
    <Stack.Navigator
    screenOptions={{
        header:()=>null
    }}
    >
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="Detail" component={ProductDetail} />
     
    </Stack.Navigator>
  );
}