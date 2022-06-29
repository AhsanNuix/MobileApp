import { View, Text , FlatList} from 'react-native'
import React from 'react'
import Header from "../../components/header";
import styles from './style';
import category from "../../assets/data/category.json";
import CategoryCard from "../../components/categoryCard/index";
import { useNavigation , useRoute} from "@react-navigation/native";
export default function CategoryScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1 , marginBottom:100}}>
     <Header />
     <View style={styles.header}>
       <Text style={styles.text}>
         Category
       </Text>
     </View>
     <View>
     <FlatList
          numColumns={2}
          data={category}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (item.parent===null? <CategoryCard category={item} onPressHandler={()=>{navigation.navigate('Filter',{category:item})}}/> : null)}
        />
      </View>
     </View>
    
  )
}