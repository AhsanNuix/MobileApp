import { View, Text, Dimensions, Pressable , TouchableOpacity} from "react-native";
import React ,{useRef , useState , } from "react";
import styles from "./style";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { TextInput , RadioButton  ,FAB } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

let { width, height } = Dimensions.get("window");
let ASPECT_RATIO = width / height;

let LATITUDE_DELTA = 0.0922


export default function AddAddress(props) {
  const refAddAddress = props.refAddAddress;

  let [latitude, setLatitude] = useState(31.5204);
  let [longitude, setLongitude] = useState(74.3587);
  let [userCurrentAddress, setUserCurrentAddress] = useState();
 
  return (
    <RBSheet
      height={Dimensions.get("window").height}
    style={{flex:1}}
      ref={refAddAddress}
      closeOnDragDown={false}
      closeOnPressMask={true}
      animationType={"slide"}
      customStyles={{
        wrapper: {
          backgroundColor: "white",
        },
        container: {
          backgroundColor: "#e1fcfc",
          // margin: 50
        },
        
      }}
    >
     <View style={{flex:1}}>
     <View style={styles.map}>
     <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex:1}}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            // image={{ uri: "../assets/marker.png" }}
            // style={{ width: 5, height: 5, backgroundColor: "green" }}
          />
        </MapView>

     </View>
     <View style={{padding:10, flex:0.7}}>
     <View style={{flexDirection:"row"}}>
     <AntDesign name="left" size={24} color="#127cc0" />
     <Text style={styles.head}>My Address</Text>
     </View>
     <View>
     <TextInput
          style={styles.input}
            theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
            mode="outlined"
            label="Password"
            outlineColor="#127cc0"
            activeOutlineColor="#127cc0"
            
          />
          <TextInput
          style={styles.input}
            theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
            mode="outlined"
            label="Password"
            outlineColor="#127cc0"
            activeOutlineColor="#127cc0"
            
          />
          <TextInput
          style={styles.input}
            theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
            mode="outlined"
            label="Password"
            outlineColor="#127cc0"
            activeOutlineColor="#127cc0"
            
          />
     </View>
     <View style={{flexDirection:"row" ,justifyContent:'space-evenly' , marginTop:10,}}>
     <View style={styles.icons}>
     <Entypo name="home" size={28} color={'gray'} />
     </View>
     <View style={styles.icons}>
     <Entypo name="home" size={28} color={'gray'} />
     </View>
     <View style={styles.icons}>
     <Entypo name="home" size={28} color={'gray'} />
     </View>
     </View>
     <View>
     <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
     </View>
     </View>
     </View>
    </RBSheet>
  );
}
