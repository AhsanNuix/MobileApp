import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/header";
import styles from "./style";
import category from "../../assets/data/category.json";
import CategoryCard from "../../components/categoryCard/index";
import { useNavigation, useRoute } from "@react-navigation/native";
import API from "../../network/api";
export default function CategoryScreen() {
  const navigation = useNavigation();
  const [departments, setDepartments] = useState();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    new API().fetchDepartments().then((data) => {
      setDepartments(data);
      setTimeout(() => {
        setLoad(false);
      }, 300);
    });
  }, []);

  return  (
    <View style={{ flex: 1, paddingBottom:130}}>
      <Header />
      {load ? (<ActivityIndicator size="large" color="#127cc0"/>):(<View>
        <View style={styles.header}>
        <Text style={styles.text}>Category</Text>
      </View>
      <View>
        <FlatList
          numColumns={2}
          data={departments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard
              item={item.attributes.title}
              url={item.attributes.image.data.attributes.url}
              onPressHandler={() => {
                navigation.navigate("CategoryDetail", { category: item });
              }}
            />
          )}
        />
      </View>
      </View>)}

     
      {/* <View>
        <FlatList
          numColumns={2}
          data={category}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard
              category={item}
              onPressHandler={() => {
                navigation.navigate("Filter", { category: item });
              }}
            />
          )}
        />
      </View> */}
    </View>
  );
}
