import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckOut from "../../screens/checkOut";
import CartScreen from "../../screens/cart";
import OrderPlace from "../../screens/orderPlace";
const Stack = createNativeStackNavigator();
export default function CartScreenNavigation() {
  return (
    <Stack.Navigator
    screenOptions={{
        header:()=>null
    }}
    >
      <Stack.Screen name="CartPage" component={CartScreen} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="OrderPlace" component={OrderPlace} />
      
    </Stack.Navigator>
  );
}
