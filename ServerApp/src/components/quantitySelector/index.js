import { View, Text, Pressable } from "react-native";
import React, { useState, useContext, useEffect  } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./style";
import { Store } from "../../contexts/context";
export default function QuantitySelector(props, {onPressDelete = () => {}}) {
  const [qty, setQty] = useState(props.product.current);
  const {setCartArray , cartArray , prod , setProd} =useContext(Store);


  let [product, setProduct] = useState(props.product.current);

  useEffect(() => {
    setProduct(props.product.current);
  }, [props.product.current]);

  let updateCart = () => {
    setCartArray(
      cartArray.map((x) => {
        if (x.id === props.product.id) return props.product;

        return x;
      })
    );
  };

  let onPressAdd = () => {
    props.product.current = props.product.current + 1;
    setProduct(props.product.current);
    updateCart();
  };

  let onPressMinus = () => {
    props.product.current = props.product.current - 1;
    setProduct(props.product.current);
    updateCart();
  };

  let deleteFunction = () => {
    if (product > 1) onPressMinus();
    else {
      onPressDelete();
      setCartArray(
        cartArray.filter(
          (current) => !(current.id == props.product.id)
        )
      );
    }
  };


  
  let update =()=>{  setCartArray(
    cartArray.map((item) => {
      if (item.id === props.product.id) {
        item.current = qty;
        
        return props.product;
      }
      return item;
    })
  );
};
  
  return (
    <View style={[styles.container,props.style]}>
      <Pressable
        style={[styles.button, { backgroundColor: "#8dd9fc" }]}
        onPress={() => deleteFunction()}
      >
        {product == 1 ? (
          <FontAwesome5 name="trash" size={18} color="#127cc0" />
        ) : (
          <FontAwesome5 name="minus" size={18} color="#127cc0" />
        )}
      </Pressable>
      <View style={styles.qtyView}>
        <Text style={styles.buttonText}>{props.product.current}</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={onPressAdd}
      >
        <FontAwesome5 name="plus" size={18} color="white" />
      </Pressable>
    </View>
  );
}
