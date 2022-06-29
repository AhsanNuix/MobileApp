import {
  View,
  Text,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import styles from "./style";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, RadioButton, FAB } from "react-native-paper";
import AddAddress from "../addAdress";
export default function MyAddress(props) {
  const refAddress = props.refAddress;
  const refAddAddress = useRef();
  return (
    <RBSheet
      height={Dimensions.get("window").height}
      ref={refAddress}
      closeOnDragDown={false}
      closeOnPressMask={true}
      animationType={"slide"}
      customStyles={{
        wrapper:{
          backgroundColor:'',
        },
        container: {
           backgroundColor: "#e1fcfc",
          
        },
      }}
    >
      <View style={{flex: 1}}>
        <AddAddress refAddAddress={refAddAddress} />
        <View style={{ backgroundColor: "#abdcf5" }}>
          <View style={{ flexDirection: "row", margin: 15 }}>
            <Pressable
              style={styles.backButton}
              on
              onPress={() => {
                refAddress.current.close();
              }}
            >
              <AntDesign name="left" size={24} color="#127cc0" />
            </Pressable>
            <Text style={styles.head}>My Address</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Pressable
            style={styles.button}
            onPress={() => {
              refAddAddress.current.open();
            }}
          >
            <Text style={styles.text1}>Add New Address</Text>
            <FAB style={styles.fab} small icon="plus" color="green" />
          </Pressable>

          {/* <Text style={styles.text2}>No Address Found</Text> */}
        </View>
      </View>
    </RBSheet>
  );
}
