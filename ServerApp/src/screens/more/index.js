import { View, Text, Pressable  , ScrollView , Image} from "react-native";
import React ,{useRef , useState , useContext} from "react";
import { Card } from "react-native-paper";
import styles from "./style";
import Header from "../../components/header/index";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation , useRoute} from "@react-navigation/native";
import LoginPhone from "../loginPhone";
import QuickOrder from "../quickOrder";
import Support from "../support";
import {Store} from '../../contexts/context'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import MyAddress from "../myAddress";
import MyOrder from "../myOrder";
import Password from "../password";
import {AuthContext} from '../../contexts/AuthProvider';
import PersonalInfo from "../personalInfo";
export default function MoreScreen() {
  const refLogin = useRef();
  const refQuick = useRef();
  const refSupport = useRef();
  const refMyOrder = useRef();
  const refAddress = useRef();
  const refPInfo = useRef();
  const refPass = useRef();
  const {logged , setLogged} = useContext(AuthContext);
 const navigation = useNavigation();
  return (
    !logged?(
    <View>
      <Header />
      <View style={styles.header}>
        <Text style={styles.text}>More</Text>
      </View>
      <Pressable style={styles.button} onPress={()=>{refLogin.current.open()}}>
        <Text style={styles.buttonText}>Log in/Sign Up</Text>
      </Pressable>


      <LoginPhone refLogin={refLogin}/>


      
      <Card style={styles.card}>
        <Pressable style={styles.innerView} onPress={()=>{refQuick.current.open()}}>
          <View style={styles.icon}>
            <FontAwesome5 name="stopwatch" size={24} color="#127cc0" />
          </View>
          <Text style={styles.innerText}>Quick Order</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
        <QuickOrder refQuick={refQuick} />
        <Pressable style={styles.innerView} onPress={()=>{refSupport.current.open()}}>
        <View style={styles.icon}>
        <FontAwesome5 name="headset" size={24} color="#127cc0" />
          </View>
          <Text style={styles.innerText}>Support</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
        <Support refSupport={refSupport} />
        <View style={[styles.innerView, { borderBottomWidth: 0 }]}>
        <View style={[styles.icon,{backgroundColor:"#fcffb0"}]}>
        <FontAwesome name="star" size={24} color="gold" />
          </View>
          <Text style={styles.innerText}>Rate this App</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </View>
      </Card>
      <View>
        <Text style={styles.copyRight}>ⓒ Copyright Muhammad Ahsan SP20-BCS-103</Text>
      </View>
    </View>):
    (<View style={{flex:1}}>
     <Header />
     <QuickOrder refQuick={refQuick} />
      <Support refSupport={refSupport} />
      <MyAddress refAddress={refAddress} />
      <MyOrder refMyOrder={refMyOrder} />
      <Password refPass={refPass} />
      <PersonalInfo refPInfo={refPInfo} />
      <View style={styles.header}>
        <Text style={styles.text}>Hello Muhammad Ahsan!</Text>
      </View>
      <ScrollView>
        <View>
        <Pressable onPress={()=>{navigation.navigate('RewardPoints')}}>
        <Card style={[styles.card,{backgroundColor:'#abdcf5' , height:150}]}>
        <View style={{flexDirection:"row" , padding:20}}>
        <Text style={[styles.innerText,{flex:1,fontSize:16}]}>Redeem your Servaid Reward Points</Text>
        <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </View>
        <View style={{flexDirection:"row"}}>
        <View style={styles.tagger}>
        <Image style={{width:30, height:30 , marginHorizontal:5}} source={{uri:'https://cdn-icons-png.flaticon.com/512/1041/1041888.png'}} />
          <Text style={styles.gift}>RS. 0</Text>
        </View>
        <View style={{flex:0.7 }}>

        </View>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3835/3835774.png'}} style={{width:70 , height:70}}/>
        </View>

        </Card>
</Pressable>
        </View>
        <View>

        <Card style={[styles.card,{height:200}]}>
        <Pressable style={styles.innerView} onPress={()=>{refQuick.current.open()}}>
          <View style={styles.icon}>
            <FontAwesome5 name="stopwatch" size={24} color="#127cc0" />
          </View>
          <Text style={styles.innerText}>Quick Order</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
        
        <Pressable style={[styles.innerView,{borderBottomWidth:0}]} onPress={()=>{refMyOrder.current.open()}}>
        <View style={[styles.icon,{backgroundColor:'#f5bbfc'}]}>
        <Entypo name="shopping-bag" size={24} color="#960aa8" />
        
          </View>
          <Text style={styles.innerText}>My Order</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
      
        
      </Card>

        </View>
        <View>

        <Card style={styles.card}>
        <Pressable style={styles.innerView} onPress={()=>{refAddress.current.open()}}>
          <View style={[styles.icon,{backgroundColor:"#fcffb0"}]}>
            <Entypo name="location-pin" size={24} color="gold" />
           
          </View>
          <Text style={styles.innerText}>My Address</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
       
        <Pressable style={styles.innerView} onPress={()=>{refPInfo.current.open()}}>
        <View style={[styles.icon,{backgroundColor:"#c3fcc2"}]}>
        <Ionicons name="person" size={24} color="#06ba12" />
          </View>
          <Text style={styles.innerText}>Personal Information</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
       
        <Pressable style={[styles.innerView, { borderBottomWidth: 0 }]} onPress={()=>{refPass.current.open()}}>
        <View style={[styles.icon,{backgroundColor:"#fcc292"}]}>
        <Ionicons name="ios-lock-closed" size={24} color="#fc923a" />
          </View>
          <Text style={styles.innerText}>Update Password</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
      </Card>
          
        </View>
        <View>
        <Card style={styles.card}>
        <Pressable style={styles.innerView} onPress={()=>{refSupport.current.open()}}>
        <View style={styles.icon}>
        <FontAwesome5 name="headset" size={24} color="#127cc0" />
          </View>
          <Text style={styles.innerText}>Support</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>

        <View style={[styles.innerView]}>
        <View style={[styles.icon,{backgroundColor:"#fcffb0"}]}>
        <FontAwesome name="star" size={24} color="gold" />
          </View>
          <Text style={styles.innerText}>Rate this App</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </View>

        <Pressable style={[styles.innerView,{borderBottomWidth:0}]} onPress={()=>{setLogged(false)}}>
          <View style={[styles.icon,{backgroundColor:"#fab5b4"}]}>
            <Ionicons name="log-out" size={24} color="#ff524f" />
            
          </View>
          <Text style={styles.innerText}>Sign Out</Text>
          <AntDesign
            style={{ marginRight: 20 }}
            name="right"
            size={24}
            color="black"
          />
        </Pressable>
       
        
        
       
      </Card>
        </View>
        <View>
        <Text style={styles.copyRight}>ⓒ Copyright Muhammad Ahsan SP20-BCS-103</Text>
      </View>
      </ScrollView>


    </View>)
  );
}
