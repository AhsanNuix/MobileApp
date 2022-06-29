import { View, Text, Dimensions, Pressable , ScrollView } from "react-native";
import React ,{useRef , useState} from "react";
import styles from "./style";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import {  RadioButton,TextInput, Title, Button   } from "react-native-paper";
export default function Password(props) {
  const refPass = props.refPass;
  return (
    <RBSheet
      height={Dimensions.get("window").height}
      ref={refPass}
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
      <View style={{flexDirection:"row" , margin:15}}>
     <Pressable
          style={styles.backButton}
          on
          onPress={() => {
            refPass.current.close();
          }}
        >
          <AntDesign name="left" size={24} color="#127cc0" />
        </Pressable>
        <Text style={styles.head}>Update Password</Text>
     </View>
     </View>
     <View style={styles.container}>
      <Title style={styles.heading}>Enter OTP Code</Title>
      <Text>An OTP code has been sent on below details</Text>

      <View style={styles.textView}>
        <Text>Phone Number</Text>
        <Text style={{ fontWeight: "bold" }}>03134855124</Text>
      </View>

      <View style={styles.textView}>
        <Text>Email Address</Text>
        <Text style={{ fontWeight: "bold" }}>azlanrasool@gmail.com</Text>
      </View>
      <View style={styles.otpInputView}>
        <TextInput
          maxLength={1}
          style={styles.otpInput}
          keyboardType="numeric"
          theme={{
            colors: {
              primary: "#127cc0",
              placeholder: "#127cc0",
            },
          }}
        />
        <TextInput maxLength={1} style={styles.otpInput} />
        <TextInput maxLength={1} style={styles.otpInput} />
        <TextInput maxLength={1} style={styles.otpInput} />
      </View>
      <Button
        mode="contained"
        color="rgb(255, 240, 232)"
        labelStyle={{ color: "#FC7F23" }}
        style={styles.resendButton}
        uppercase={false}
      >
        Resend
      </Button>
      <Button
        mode="contained"
        color="#127cc0"
        labelStyle={{ color: "white" }}
        style={styles.continueButton}
        uppercase={false}
      >
        Continue
      </Button>
    </View>
     </View>
    </RBSheet>
  );
}
