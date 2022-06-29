import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import styles from "./style";
import Header from "../../components/header/index";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
export default function OrderPlace() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.innerView}>
        <LottieView
          style={styles.image}
          source={require("../../assets/images/full-cart.json")}
          autoPlay
          loop
        />
        <Text style={styles.textHeader}>Order Placed successfully</Text>
        <Text style={styles.text}>Ec-82528</Text>
        <Text style={styles.text}>Your order has been placed</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.text_2}>
            We have is not confirmation email to sp20-bcs-103@cuilahore.edu.pk
            with the order details
          </Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate("CartPage");
              navigation.navigate("HomePage");
            }}
          >
            <Text style={styles.buttonText}>Explore more</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
