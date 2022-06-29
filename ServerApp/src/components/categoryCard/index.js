import { View, Text, Pressable } from "react-native";
import React,{useEffect} from "react";
import styles from "./style";
import { Card } from "react-native-paper";
export default function CategoryCard({item , onPressHandler , url}) {

  return (
    <Pressable onPress={onPressHandler}>
      <Card style={styles.container}>
        <Card.Cover style={styles.image} source={{ uri: "http://192.168.190.113:1337"+url}} />
        <Text style={styles.text}>{item}</Text>
      </Card>
    </Pressable>
  );
}
