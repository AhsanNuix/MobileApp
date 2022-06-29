import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./style";
import { Card } from "react-native-paper";
export default function CategoryCard(props) {
  return (
    <Pressable onPress={props.onPressHandler}>
      <Card style={styles.container}>
        <Card.Cover style={styles.image} source={{ uri: props.category.image }} />
        <Text style={styles.text}>{props.category.title}</Text>
      </Card>
    </Pressable>
  );
}
