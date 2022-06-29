import { View, Text , Pressable } from "react-native";
import React from "react";
import RewardPoints from "../../screens/rewardPoints/index";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "../../components/header";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";
import TransactionHistory from "../../screens/transectionHistory";
import HowItWork from "../../screens/howItWorks";
import { useNavigation } from "@react-navigation/native";
const Tab = createMaterialTopTabNavigator();
export default function RewardPointsScreenNavigation() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.head}>
<Pressable onPress={()=>{navigation.goBack()}}>
        <AntDesign name="left" size={24} color="#127cc0" />
        </Pressable>
        <Text style={styles.text}>My Address</Text>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#abdcf5",
          },
  
        })}
      >
        <Tab.Screen name="Coupons" component={RewardPoints} />
        <Tab.Screen name="Transaction History" component={TransactionHistory} />
        <Tab.Screen name="How it Work" component={HowItWork} />
      </Tab.Navigator>
    </View>
  );
}
