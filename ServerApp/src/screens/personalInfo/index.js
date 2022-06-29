import { View, Dimensions, Pressable } from "react-native";
import React ,{useRef , useState} from "react";
import styles from "./style";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { Surface, RadioButton, Text, Button, Avatar  } from "react-native-paper";
import Input from '../../components/input/index'
export default function PersonalInfo(props) {
  const refPInfo = props.refPInfo;
  const [checked, setChecked] = React.useState("Male");
  return (
    <RBSheet
      height={Dimensions.get("window").height}
      ref={refPInfo}
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
            refPInfo.current.close();
          }}
        >
          <AntDesign name="left" size={24} color="#127cc0" />
        </Pressable>
        <Text style={styles.head}>Personal Information</Text>
     </View>
     </View>
     <View style={styles.container}>
      <Surface style={styles.surface}>
        <View style={styles.avatarContainer}>
          <Avatar.Image size={120} style={styles.avatar} />
        </View>
        <Avatar.Icon
          size={35}
          style={styles.avatarIcon}
          icon="pencil-circle"
          color="#127cc0"
        />

        <View style={styles.inputsContainer}>
          <Input label="Name" value="Ahsan" />
          <Input label="Phone Number" value="03134855124" />
          <Input label="Email Address" value="ahsan@gmail.com" />
        </View>

        <View style={styles.radioContainer}>
          <View style={styles.radio}>
            <RadioButton
              value="Male"
              status={checked === "Male" ? "checked" : "unchecked"}
              onPress={() => setChecked("Male")}
              color="#127cc0"
            />
            <Text>Male</Text>
          </View>
          <View style={styles.radio}>
            <RadioButton
              value="Female"
              status={checked === "Female" ? "checked" : "unchecked"}
              onPress={() => setChecked("Female")}
              color="#127cc0"
            />
            <Text>Female</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            color="#127cc0"
            uppercase={false}
            style={styles.button}
          >
            Save Changes
          </Button>
        </View>
      </Surface>
    </View>
     </View>
    </RBSheet>
  );
}
