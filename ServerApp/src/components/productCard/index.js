import { View, Text, Pressable, Alert , Image } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Card } from "react-native-paper";
import styles from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import QuantitySelector from "../quantitySelector/index";
import { Store } from "../../contexts/context";
export default function ProductCard(props) {
  const [buttonColor, setButtonColor] = useState("#127cc0");
  const [check, setCheck] = useState(false);
  const [qty, setQty] = useState(0);
  const [selector, setSelector] = useState(false);
  const { setCartArray, cartArray, prod, setProd } = useContext(Store);
  const [myProd , setMyProd] = useState({})

  useEffect(() => {
    setButtonColor(cartArray.find((current) => current === props.product) ? "#20ab23" : "#127cc0");
    setCheck(cartArray.find((current) => current === props.product) ? true : false)
  }, [cartArray]);

  // let update =()=>{ buttonColor === "#127cc0"
  // ? null
  // : setCartArray(
  //     cartArray.map((item) => {
  //       if (item.id === props.product.id) {
  //         item.current = qty;
  //         setMyProd(item)
  //         return props.product;
  //       }
  //       return item;
  //     })
  //   );
  // };

  return (
    <Card style={styles.container} onPress={props.onPressHandler}>
      <Card.Cover style={styles.image} source={{ uri: props.product.image }} />
      <View style={styles.points}>
        <Image style={styles.star} source={require('../../assets/images/star.png')}/>
        <Text style={styles.starText}>{props.product.point}</Text>
      </View>
      <View>
        <Text style={styles.title} numberOfLines={2}>
          {props.product.title}
        </Text>
      </View>
      <View>
        <Text style={styles.price}>Rs. {props.product.price}</Text>
      </View>
      {!selector ? (
        <Pressable
          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={() => {
            if (buttonColor === "#127cc0") {
              setCartArray(cartArray.concat([props.product]));
              setButtonColor("#20ab23");
            }
            setSelector(true);
            setTimeout(() => {
              setCheck(true);
              setSelector(false);
            }, 2000);
          }}
        >
          {!check ? (
            <FontAwesome5 name="plus" size={20} color="white" />
          ) : (
            <Text style={styles.buttonText}>{props.product.current}</Text>
          )}
        </Pressable>
      ) : (
        <View style={{ alignItems: "flex-end" }}>
          <QuantitySelector product={props.product} onPressDelete={() => {
              setButtonColor("#127cc0");
            }}/>
        </View>
      )}
    </Card>
  );
}
