import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useContext } from "react";
import { Card, Switch, RadioButton, TextInput } from "react-native-paper";
import styles from "./style";
import Header from "../../components/header/index";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MyAddress from "../myAddress/index";
import RBSheet from "react-native-raw-bottom-sheet";
import { AuthContext } from "../../contexts/AuthProvider";
import LoginPhone from "../loginPhone";
import { Store } from "../../contexts/context";
export default function CheckOut() {
  const navigation = useNavigation();
  const refAddress = useRef();
  const refLogin = useRef();
  const rePayment = useRef();
  const [button_1, setButton_1] = useState(false);
  const [button_2, setButton_2] = useState(false);
  const { logged } = useContext(AuthContext);
  const { setCartArray } = useContext(Store);
  const Payment = () => {
    return (
      <RBSheet
        height={Dimensions.get("window").height - 550}
        ref={rePayment}
        closeOnDragDown={false}
        closeOnPressMask={true}
        animationType={"slide"}
        customStyles={{
          wrapper: {
            backgroundColor: "",
          },
          container: {
            backgroundColor: "white",
          },
        }}
      >
        <View>
          <View style={styles.buttonHeader}>
            <Pressable
              style={{ margin: 10 }}
              onPress={() => {
                rePayment.current.close();
              }}
            >
              <AntDesign name="left" size={26} color="#127cc0" />
            </Pressable>
            <Text style={[styles.textHeader, { marginTop: 10 }]}>
              Payment Method
            </Text>
          </View>
          <View>
            <View
              style={{ flexDirection: "row", alignItems: "center", margin: 10 }}
            >
              <View style={styles.cardIcon}>
                <FontAwesome5 name="hand-holding-usd" size={24} color="white" />
              </View>
              <Text style={[styles.textHeader, { marginLeft: 10, flex: 1 }]}>
                Cash on Delivery
              </Text>
              <RadioButton status={true} color="#127cc0" />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", margin: 10 }}
            >
              <View style={[styles.cardIcon, { backgroundColor: "#127cc0" }]}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/349/349221.png",
                  }}
                />
              </View>
              <Text style={[styles.textHeader, { marginLeft: 10, flex: 1 }]}>
                Cash on Delivery
              </Text>
              <RadioButton status={true} color="#127cc0" />
            </View>
            <View></View>
          </View>
        </View>
      </RBSheet>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MyAddress refAddress={refAddress} />
      <LoginPhone refLogin={refLogin} />
      <Payment />
      <Header />
      <View style={styles.buttonHeader}>
        <Pressable
          style={{ margin: 10 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={26} color="#127cc0" />
        </Pressable>
        <Text style={[styles.textHeader, { marginTop: 10 }]}>Check Out</Text>
      </View>
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <Card style={styles.card}>
          <Text style={styles.textHeader}>Notice*</Text>
          <Text style={styles.text}>
            • Order placed after 12 am will be delivered next day{" "}
          </Text>
          <Text style={styles.text}>
            • Lahore, Rawalpindi, Multan, Sialkot, Gujranwala & Karachi delivery
            time is 2-3 hours{" "}
          </Text>
          <Text style={styles.text}>
            • Nationwide orders will be delivered in 24-48 hours{" "}
          </Text>
          <Text style={styles.text}>
            • Karachi delivery days:Monday-Saturday (9:00 am to 9:00 pm){" "}
          </Text>
        </Card>
        <Card style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textHeader, { flex: 1 }]}>
              Delivery Address
            </Text>
            <Pressable
              style={styles.cardHead}
              onPress={() => {
                refAddress.current.open();
              }}
            >
              <MaterialCommunityIcons
                name="pencil-circle"
                size={24}
                color="#127cc0"
              />
            </Pressable>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Home</Text>
            <Text>Plot 72 , Lahore , Pakistan</Text>
          </View>
        </Card>
        <Card style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textHeader, { flex: 1 }]}>
              Delivery Address
            </Text>
            <Pressable
              style={styles.cardHead}
              onPress={() => {
                rePayment.current.open();
              }}
            >
              <MaterialCommunityIcons
                name="pencil-circle"
                size={24}
                color="#127cc0"
              />
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.cardIcon}>
              <FontAwesome5 name="hand-holding-usd" size={24} color="white" />
            </View>
            <Text style={[styles.textHeader, { marginLeft: 10 }]}>
              Cash on Delivery
            </Text>
          </View>
        </Card>
        <Card style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textHeader, { marginTop: 10, flex: 1 }]}>
              Additional Notes for Order
            </Text>
            <Pressable
              style={styles.plus}
              onPress={() => {
                setButton_1(!button_1);
              }}
            >
              <Entypo name="plus" size={35} color="#127cc0" />
            </Pressable>
          </View>
          {button_1 && (
            <View>
              <TextInput
                style={styles.input}
                theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
                mode="outlined"
                outlineColor="#127cc0"
                activeOutlineColor="#127cc0"
              />
            </View>
          )}
        </Card>
        <Card style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <View style={[styles.cardIcon, { backgroundColor: "#960aa8" }]}>
              <Ionicons name="ios-barcode-outline" size={24} color="white" />
            </View>
            <Text style={[styles.textHeader, { margin: 10, flex: 0.83 }]}>
              Apply Promo Code
            </Text>
            <Pressable
              style={[styles.plus, { flex: 0.18 }]}
              onPress={() => {
                setButton_2(!button_2);
              }}
            >
              <Entypo name="plus" size={34} color="#127cc0" />
            </Pressable>
          </View>
          {button_2 && (
            <View style={{ flexDirection: "row", padding: 10 }}>
              <TextInput
                style={[styles.input]}
                theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
                mode="outlined"
                outlineColor="#127cc0"
                activeOutlineColor="#127cc0"
              />
              <Pressable
                style={[styles.button, { margin: 0 }]}
                onPress={() => {
                  navigation.navigate("CheckOut");
                }}
              >
                <Text style={styles.buttonText}>Verify</Text>
              </Pressable>
            </View>
          )}
        </Card>
        <Card style={[styles.card, { marginBottom: 50 }]}>
          <Text style={styles.textHeader}>Billing Summary</Text>
          <View style={styles.innerView}>
            <Text style={{ fontSize: 16, flex: 1 }}>Subtotal</Text>
            <Text style={styles.textHeader}>Rs.8474.75</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={{ fontSize: 16, flex: 1 }}>Shipping Charges</Text>
            <Text style={styles.textHeader}>Rs.0</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={{ fontSize: 16, flex: 1 }}>FBR Charges</Text>
            <Text style={styles.textHeader}>Rs.0</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1041/1041888.png",
                  }}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.innerText}>Rs.0</Text>
                  <Text style={styles.innerText}>Available</Text>
                </View>
                <Switch style={styles.switch} />
              </View>
              <Text style={styles.textHeader}>Rs.8474.75</Text>
            </View>
            <Text style={styles.servaid}>
              Max servaid coin can be utilized is Rs. 200
            </Text>
          </View>
        </Card>
      </ScrollView>
      <View>
        <Card>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Text style={{ fontSize: 18, flex: 1 }}>Total</Text>
            <Text style={styles.innerText}>Rs.200</Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => {
              if (logged) {
                navigation.navigate("OrderPlace");
                setCartArray([]);
              } else {
                refLogin.current.open();
              }
            }}
          >
            <Text style={styles.buttonText}>Place Order</Text>
          </Pressable>
        </Card>
      </View>
    </View>
  );
}
