import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
import React, { useContext,useEffect , useState } from "react";
import { Button, Card } from "react-native-paper";
import styles from "./style";
import Header from "../../components/header/index";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { Store } from "../../contexts/context";
import CartCard from "../../components/cartCard";

export default function CartScreen() {
  const navigation = useNavigation();
  const { cartArray } = useContext(Store);
  const[price , setPrice] = useState(0)
  
 useEffect(()=>{
   let p = 0;
   cartArray.forEach(x=>{p+=x.price*x.current})
   setPrice(p)
 },[cartArray])
  
  return cartArray.length==0 ? (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.text}>Cart</Text>
      </View>
      <ScrollView>
        <Card style={styles.container}>
          <LottieView
            style={styles.image}
            source={require("../../assets/images/empty-cart.json")}
            autoPlay
            loop
          />
          <Text style={styles.text}>You Dont have any item in your cart</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>Start Shopping</Text>
          </Pressable>
        </Card>
      </ScrollView>
    </View>
  ) : (
    <View style={{ flex: 1 }}>
     <Header />
      <View style={styles.header}>
        <Text style={styles.text}>Cart</Text>
      </View>
      <View style={{flex:1}}>
      <Card style={styles.cartCard}>
        <FlatList
        ItemSeparatorComponent={()=><View style={{height:2 , backgroundColor:"#b1e3fa" , marginBottom:15}} />}
          data={cartArray}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <CartCard product={item}/>;
          }}
        />
      </Card>
      </View>
      <View>
        <Card>
        <View style={{flexDirection:"row" , margin:10}}>
        <Text style={{fontSize:18, flex:1}}>Total</Text>
        <Text style={styles.text}>Rs. {price}</Text>

        </View>
        <Pressable
            style={styles.button}
            onPress={()=>{
              
              navigation.navigate('CheckOut')
              
              }}
          >
            <Text style={styles.buttonText}>Proceed To Checkout</Text>
          </Pressable>
        </Card>
      </View>
    </View>
  );
}
