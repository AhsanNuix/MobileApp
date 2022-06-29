import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home";
import ProductDetail from "../../screens/productDetails";
import FilterScreen from "../../screens/filterScreen";
import MoreScreen from '../../screens/more/index'
import RewardPointsScreenNavigation from '../rewardPoints/index'
const Stack = createNativeStackNavigator();
export default function MoreScreenNavigation() {
  return (
    <Stack.Navigator
    screenOptions={{
        header:()=>null
    }}
    >
      <Stack.Screen name="MoreScreen" component={MoreScreen} />
      <Stack.Screen name="RewardPoints" component={RewardPointsScreenNavigation} />
      
    </Stack.Navigator>
  );
}
