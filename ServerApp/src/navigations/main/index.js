import React , {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenNavigation from "../home";

import SearchScreen from "../../screens/search";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CategoryScreenNavigation from "../categories";
import MoreScreenNavigation from "../more";
import { Store } from "../../contexts/context";
import CartScreenNavigation from "../cart";
const Tab = createBottomTabNavigator();
export default function Main() {
  const {cartArray} = useContext(Store)
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          style: {
            position: "absolute",
          },
          tabBarIcon: ({ color }) => {
            if (route.name === "Home") {
              return <Entypo name="home" size={28} color={color} />;
            } else if (route.name === "Search") {
              return <FontAwesome name="search" size={28} color={color} />;
            } else if (route.name === "Cart") {
              return <Feather name="shopping-cart" size={28} color={color} />;
            } else if (route.name === "Category") {
              return (
                <MaterialCommunityIcons
                  name="shape-plus"
                  size={28}
                  color={color}
                />
              );
            } else if (route.name === "More") {
              return (
                <Fontisto name="nav-icon-list-a" size={22} color={color} />
              );
            }
          },
          tabBarActiveTintColor: "#127cc0",
          tabBarInactiveTintColor: "#99a4ad",
          header: () => null,
          tabBarLabelStyle: {
            fontSize: 14,
            color: "#99a4ad",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreenNavigation} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen
          name="Cart"
          component={CartScreenNavigation}
          options={{ tabBarBadge: cartArray.length }}
        />
        <Tab.Screen name="Category" component={CategoryScreenNavigation} />
        <Tab.Screen name="More" component={MoreScreenNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
