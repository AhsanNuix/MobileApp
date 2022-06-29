import { View, Text, Image , FlatList , Pressable} from "react-native";
import React from "react";
import styles from "./style";
import category from '../../assets/data/category.json'
export default function HealthConcern(props) {
  const navigation = props.navigate;
  return (
    <FlatList 
    horizontal={true}
    showsHorizontalScrollIndicator={false}
     data={category}
     keyExtractor={(item)=>item.id}
     renderItem={({item})=>((item.parent==="1" && item.subParent===null && item.image)?(<Pressable onPress={()=>{navigation.navigate('Filter',{category:category[0],homeCategory:item.id})}} style={[styles.container, { backgroundColor: item.color }]}>
      <View style={{flex:1.5}}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
      <View style={{flex:1}}>
        <Image style={styles.image} source={{uri:item.image}} />
      </View>
    </Pressable>):null)}
    
    />
    
  );
}
