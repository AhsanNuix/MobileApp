import { View, Dimensions, Pressable , TouchableOpacity} from "react-native";
import React ,{useRef , useState} from "react";
import styles from "./style";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { TextInput , RadioButton  ,Button, Divider, Text} from "react-native-paper";


export default function MyOrder(props) {
  const refMyOrder = props.refMyOrder;
  const [itemPressed, setItemPressed] = useState(-1);
  return (
    <RBSheet
      height={Dimensions.get("window").height}
      ref={refMyOrder}
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
            refMyOrder.current.close();
          }}
        >
          <AntDesign name="left" size={24} color="#127cc0" />
        </Pressable>
        <Text style={styles.head}>My Orders</Text>
     </View>
     </View>
     
<View style={styles.maincontainer}>
      <Divider style={styles.divider} />

      <View style={styles.container1}>
        <Pressable
          onPress={() => setItemPressed(1)}
          style={{
            borderBottomWidth: 3,
            borderBottomColor: itemPressed == 1 ? "#127cc0" : "#d6edff",
            borderRadius: 0,
            alignItems: "center",
            justifyContent: "center",
            marginLeft:20,
            
          }}
        >
        <Text  style={{fontSize:14, color:"black"}}>In process</Text>
          
        </Pressable>

        <Pressable

          onPress={() => setItemPressed(2)}
          style={{
            borderBottomWidth: 3,
            borderBottomColor: itemPressed == 2 ? "#127cc0" : "#d6edff",
            borderRadius: 0,
            alignItems: "center",
            justifyContent: "center",
            marginLeft:20,
            
          }}
        >
          <Text style={{fontSize:14, color:"black"}}>History</Text>
        </Pressable>
      </View>

      <View style={styles.container2}>
        <Text style={styles.text2}>
          You have not placed any any orders yet.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text1}>Start Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
</View>
     
    </RBSheet>
  );
}
