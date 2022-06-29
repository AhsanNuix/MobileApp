import {
  View,
  Text,
  Pressable,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styles from "./style";
import Header from "../../components/header";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import category from "../../assets/data/category.json";
import product from "../../assets/data/product.json";
import ProductCard from "../../components/productCard/index";
import RBSheet from "react-native-raw-bottom-sheet";
import { Entypo } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import API from "../../network/api";
export default function CategoryDetail(props) {
  const navigation = useNavigation();
  const refFilter = useRef();
  const [load, setLoad] = useState(true);
  const [subDepartments, setSubDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const[partCategories , setPartCategories]=useState([])
  const [selectedSubDepartment, setSelectedSubDepartment] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    setLoad(true)
    let api = new API();
    api.fetchCategories().then((cat) => {
      api.fetchSubDepartments().then((data) => {
        setSubDepartments(
          data.filter(
            (item) =>
              item.attributes.department.data.id ==
              props.route.params.category.id
          )
        );
        setCategories(
          cat.filter((item) =>
            data
              .filter(
                (item) =>
                  item.attributes.department.data.id ==
                  props.route.params.category.id
              )
              .some((a) => item.attributes.sub_department.data.id == a.id)
          )
        );
      });
    });
    
    setPartCategories(categories.filter((item)=>item.attributes.sub_department.data.id==selectedSubDepartment))
    setTimeout(() => {
      setLoad(false);
    }, 300);
  }, [selectedSubDepartment,selectedCategory]);


  const Filter = () => {
    return (
      <RBSheet
        height={Dimensions.get("window").height - 100}
        ref={refFilter}
        closeOnDragDown={false}
        closeOnPressMask={false}
        animationType={"slide"}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "",
          },
        }}
      >
        <View></View>
      </RBSheet>
    );
  };
  return (
    <View>
      <Filter />
      <Header />
      {load ? (
        <ActivityIndicator size="large" color="#127cc0" />
      ) : (
        <View>
          <View style={styles.headerTitle}>
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={26} color="#127cc0" />
              </Pressable>
              <Text style={styles.titleText}>
                {props.route.params.category.attributes.title}
              </Text>
              <Pressable
                onPress={() => {
                  refFilter.current.open();
                }}
              >
                <MaterialIcons
                  name="filter-tilt-shift"
                  size={28}
                  color="#127cc0"
                />
              </Pressable>
            </View>
            <View>
              <FlatList
                data={subDepartments}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <Pressable
                      style={[
                        styles.subDepartment,
                        item.id === selectedSubDepartment
                          ? styles.selectedSubDepartment
                          : {},
                      ]}
                      onPress={ () => {
                        setSelectedSubDepartment(item.id)
                    setSelectedCategory()
                        
                      }}
                    >
                      <Text style={styles.subParentText}>
                        {item.attributes.title}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={selectedSubDepartment?partCategories:categories}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable style={[styles.categories,selectedCategory==item.id?styles.selectedCategory:{}]} onPress={()=>{
                    setSelectedCategory(item.id) 
                    setSelectedSubDepartment(item.attributes.sub_department.data.id)}}>
                  <Text style={[styles.categoriesText,selectedCategory==item.id?styles.selectedCategoryText:{}]}>{item.attributes.title}</Text>
                </Pressable>
              )}
            />
            <Text>Products....</Text>
          </View>
        </View>
      )}
    </View>
  );
}
