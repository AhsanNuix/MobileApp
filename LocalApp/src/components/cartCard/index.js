import { StyleSheet, Text, View ,Image} from 'react-native'
import React,{useContext} from 'react'
import styles from './style'
import QuantitySelector from '../quantitySelector/index'
import { Store } from "../../contexts/context";
export default function CartCard(props) {
  const { setCartArray, cartArray, prod, setProd } = useContext(Store);
  return (
    <View style={styles.innerView}>
     <View>
         <Image source={{uri:props.product.image}} style={styles.image} />
     </View>
     <View>
         <Text numberOfLines={1} style={styles.title}>{props.product.title}</Text>
         <View style={{flexDirection:'row'}}>
         <Text style={styles.price}>Rs. {props.product.price}</Text>
         <View style={styles.qty}>
         <QuantitySelector product={props.product} />
         </View>
        
         </View>
        
     </View>
    </View>
  )
}

