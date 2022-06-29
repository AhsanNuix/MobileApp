import { View, Text, Dimensions, Pressable } from "react-native";
import React ,{useRef , useState} from "react";
import styles from "./style";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { TextInput , RadioButton  } from "react-native-paper";
export default function QuickOrder(props) {
  const refQuick = props.refQuick;
  const [selected , setSelected] = useState('Schedule a call back');
  return (
    <RBSheet
      height={Dimensions.get("window").height}
      ref={refQuick}
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
            refQuick.current.close();
          }}
        >
          <AntDesign name="left" size={24} color="#127cc0" />
        </Pressable>
        <Text style={styles.head}>Quick Order</Text>
     </View>
     <View style={{flexDirection:"row" , marginTop:20,}}>
     <Pressable style={{marginHorizontal:20,}} onPress={()=>{setSelected('Schedule a call back')}}>
      <Text style={[styles.innerHead,{borderBottomColor:(selected==='Schedule a call back'?"#127cc0":'#abdcf5')}]}>Schedule a call back</Text>
     </Pressable>
     <Pressable onPress={()=>{setSelected('Upload Prescription')}}>
       <Text style={[styles.innerHead,{borderBottomColor:(selected==='Upload Prescription'?"#127cc0":'#abdcf5')}]}>Upload Prescription</Text>
     </Pressable>

     </View>
      </View>
     <View>
     {selected==='Schedule a call back'?(<View style={{marginTop:50 , alignItems:"center"}}>
      <TextInput
          style={styles.input}
            theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
            mode="outlined"
            placeholder="Your Name"
            outlineColor="#127cc0"
            activeOutlineColor="#127cc0"
            
          />
          <TextInput
          style={styles.input}
            theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
            mode="outlined"
            placeholder="Your Phone Number"
            outlineColor="#127cc0"
            activeOutlineColor="#127cc0"
            
          />
          <TextInput
          style={styles.input}
            theme={{ roundness: 50, backgroundColor: "#abdcf5" }}
            mode="outlined"
            placeholder="Any Note for Caller"
            outlineColor="#127cc0"
            activeOutlineColor="#127cc0"
            
          />
          <Pressable style={styles.button} onPress={()=>{refSign.current.open()}}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
     </View>):(<View style={{marginTop:50 , alignItems:"center"}}>
     <TextInput
          style={[styles.input,{backgroundColor:'#fcebcc'}]}
     theme={{roundness: 50}}
       mode='outlined'
       placeholder="Upload Prescription Here"
       
       placeholderTextColor='#f5b038'
       outlineColor="#f5b038"
       activeOutlineColor='#f5b038'
       right={<TextInput.Icon name='arrow-up' color='#f5b038'/>}
          />
          <Pressable style={styles.button} onPress={()=>{refSign.current.open()}}>
            <Text style={styles.buttonText}>continue with Prescription</Text>
          </Pressable>

     </View>)}
     </View>
        </View>
    </RBSheet>
  );
}
