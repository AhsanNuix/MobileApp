import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import styles from "./style";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { TextInput, RadioButton, Card } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
export default function Support(props) {
  const refSupport = props.refSupport;
  return (
    <RBSheet
      height={Dimensions.get("window").height}
      ref={refSupport}
      closeOnDragDown={false}
      closeOnPressMask={true}
      animationType={"slide"}
      customStyles={{
        wrapper: {
          backgroundColor: "",
        },
        container: {
          backgroundColor: "#e1fcfc",
        },
      }}
    >
      <View style={{ flex: 1 }}>
      <View style={{backgroundColor:'#abdcf5'}}>
      <View style={{flexDirection:"row" , margin:15 ,}}>
          <Pressable
            style={styles.backButton}
            on
            onPress={() => {
              refSupport.current.close();
            }}
          >
            <AntDesign name="left" size={24} color="#127cc0" />
          </Pressable>
          <Text style={styles.head}>Support</Text>
          </View>
        </View>
        <Card style={styles.card}>
          <Pressable style={styles.innerView}>
            <View style={[styles.icon,{backgroundColor:'#c3fcc2'}]}>
            <Ionicons name="ios-chatbubble" size={24} color="#06ba12" />
            </View>
            <Text style={styles.innerText}>Chat Support</Text>
            <AntDesign
              style={{ marginRight: 20 }}
              name="right"
              size={24}
              color="black"
            />
          </Pressable>
          <Pressable style={styles.innerView}>
            <View style={[styles.icon,{backgroundColor:'#f5bbfc'}]}>
            <Ionicons name="call" size={24} color="#960aa8" />
            </View>
            <Text style={styles.innerText}>Call Center Support</Text>
            <AntDesign
              style={{ marginRight: 20 }}
              name="right"
              size={24}
              color="black"
            />
          </Pressable>
          <View style={styles.innerView}>
            <View style={[styles.icon, { backgroundColor: "#fcffb0" }]}>
            <Ionicons name="call" size={24} color="gold" />
            </View>
            <Text style={styles.innerText}>FAQs</Text>
            <AntDesign
              style={{ marginRight: 20 }}
              name="right"
              size={24}
              color="black"
            />
          </View>

          <Pressable style={[styles.innerView, { borderBottomWidth: 0 }]}>
            <View style={[styles.icon,{backgroundColor:'#fab5b4'}]}>
            <Ionicons name="document-text" size={24} color="#ff524f" />
            </View>
            <Text style={styles.innerText}>Terms & Conditions</Text>
            <AntDesign
              style={{ marginRight: 20 }}
              name="right"
              size={24}
              color="black"
            />
          </Pressable>
        </Card>
      </View>
    </RBSheet>
  );
}
