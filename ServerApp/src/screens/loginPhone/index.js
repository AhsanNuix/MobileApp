import { View, Text, Dimensions, Pressable } from "react-native";
import React ,{useRef , useState , useContext} from "react";
import styles from "./style";
import RBSheet from "react-native-raw-bottom-sheet";
import { AuthContext } from "../../contexts/AuthProvider";
import { AntDesign } from "@expo/vector-icons";
import { TextInput , RadioButton  } from "react-native-paper";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
export default function LoginPhone(props) {
  const refLogin = props.refLogin;
  const refSign = useRef();
  const [checked, setChecked] = React.useState('first');
  const{setLogged} = useContext(AuthContext)
  const SignUp=()=>{
    return(
      <RBSheet
      height={Dimensions.get("window").height}
      ref={refSign}
      closeOnDragDown={false}
      closeOnPressMask={false}
      animationType={"slide"}
      customStyles={{
        wrapper: {
          backgroundColor: "",
        },
        container: {
          backgroundColor: "#abdcf5",
        },
      }}
    >
      <View style={{ flex: 1 , backgroundColor:'#e1fcfc' }}>
        <Pressable
          style={styles.backButton}
          on
          onPress={() => {
            refSign.current.close();
          }}
        >
          <AntDesign name="left" size={24} color="#127cc0" />
        </Pressable>
        <View>
        <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign Up </Text>
        </View>
        <View>
        <TextInput
          style={styles.input}
            theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
            mode="outlined"
            label="Phone Number"
            value="03"
            outlineColor="#127cc0"
            activeOutlineColor="#127cc0"
            
          />
           <TextInput
          style={styles.input}
            theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
            mode="outlined"
            label="Full Name"
            outlineColor="#127cc0"
            activeOutlineColor="#127cc0"
            
          />
          <TextInput
          style={styles.input}
  
            theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
            mode="outlined"
            label="Email Address"
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
         <View style={styles.radio}>
         <RadioButton
         color="#127cc0"
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text>Male</Text>
      <RadioButton
      color="#127cc0"
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        
      />
      <Text>Female</Text>
         </View>
        </View>
         <Pressable style={styles.button} onPress={()=>{
          setLogged(true);
           refLogin.current.close();
           refSign.current.close()
           
           }}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </RBSheet>
    );
  }
  return (
    <RBSheet
      height={Dimensions.get("window").height}
      ref={refLogin}
      closeOnDragDown={false}
      closeOnPressMask={true}
      animationType={"slide"}
      customStyles={{
        wrapper: {
          backgroundColor: "",
        },
        container: {
          backgroundColor: "#abdcf5",
        },
      }}
    >
      <View style={{ flex: 1 , backgroundColor:'#e1fcfc'}}>
      <SignUp />
        <Pressable
          style={styles.backButton}
          on
          onPress={() => {
            refLogin.current.close();
          }}
        >
          <AntDesign name="left" size={24} color="#127cc0" />
        </Pressable>
        <View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}> What`s your phone number?</Text>
            <Text style={styles.subTitle}> What`s your phone number?</Text>
          </View>
          <TextInput
          style={styles.input}
            theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
            mode="outlined"
            label="Phone Number"
            value="03"
            activeOutlineColor="#127cc0"
            
          />
          <Pressable style={styles.button} onPress={()=>{refSign.current.open()}}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </RBSheet>
  );
}
