import { View, Text, Pressable, FlatList, Dimensions } from "react-native";
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
export default function FilterScreen(props) {
  const navigation = useNavigation();
  const [parents, setParents] = useState([]);
  const [subParents, setSubParents] = useState([]);
  const [parentPressed, setParentPressed] = useState("");
  const [subParentPressed, setSubParentPressed] = useState("");
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState([]);
  const refFilter = useRef();
  useEffect(async () => {
    const data = category.filter((item) =>
      item.parent === props.route.params.category.id && item.subParent === null
        ? item
        : null
    );
    setParents(data);
    const array = category.filter((item) =>
      item.parent === props.route.params.category.id && item.subParent
        ? item
        : null
    );
    setSubParents(array);
    const proArray = [];
    for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < product.length; k++) {
        if (array[i].id === product[k].category) {
          proArray.push(product[k]);
        }
      }
    }
    setProducts(proArray);
    setParentPressed(props.route.params.homeCategory);
    const companyCheck = [];
    proArray.forEach((item)=>{companyCheck.includes(item.company)?null:companyCheck.push(item.company)})
    setCompany(companyCheck);
  }, []);

  return (
    <View style={{ flex: 1, marginBottom: 100 }}>
      <Header />
      <View style={styles.headerTitle}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={26} color="#127cc0" />
        </Pressable>
        <Text style={styles.titleText}>
          {props.route.params.category.title}
        </Text>
        <Pressable
          onPress={() => {
            refFilter.current.open();
          }}
        >
          <MaterialIcons name="filter-tilt-shift" size={28} color="#127cc0" />
        </Pressable>
      </View>
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
        <View>
          <View style={styles.bottomSheetHeader}>
            <View style={{ flex: 1 }}>
              <Text style={styles.bottomSheetHeaderText}>Filters</Text>
            </View>
            <Pressable onPress={() => refFilter.current.close()}>
              <Entypo
                style={{ margin: 10 }}
                name="cross"
                size={24}
                color="gray"
              />
            </Pressable>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 16 }}>sort by</Text>
            <View style={{ flexDirection: "row" }}>
              <Pressable style={styles.subParent}>
                <Text style={styles.subParentText}>Price Low to high</Text>
              </Pressable>
              <Pressable style={styles.subParent}>
                <Text style={styles.subParentText}>Price High to Low</Text>
              </Pressable>
            </View>
            <View style={{ height: 400 }}>
              <FlatList
                data={company}
                keyExtractor={(item,index) => index}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.bottomSheetInnerView}>
                      <Text style={styles.companyText}>{item}</Text>
                      <Checkbox status={"checked"} />
                    </View>
                  );
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable style={styles.subParent}>
                <Text style={styles.subParentText}>Price Low to high</Text>
              </Pressable>
              <Pressable style={styles.subParent}>
                <Text style={styles.subParentText}>Price High to Low</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </RBSheet>

      <View style={styles.parentView}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={parents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.parent,
                { borderBottomWidth: item.id === parentPressed ? 2 : null },
              ]}
              onPress={() => {
                setParentPressed(item.id);
                setSubParentPressed("");
              }}
            >
              <Text style={{ fontSize: 16 }}>{item.title}</Text>
            </Pressable>
          )}
        />
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={subParents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            !parentPressed ? (
              <Pressable
                style={[
                  styles.subParent,
                  {
                    backgroundColor:
                      item.id === subParentPressed ? "#127cc0" : "#95dcfc",
                  },
                ]}
                onPress={() => {
                  setSubParentPressed(item.id);
                  setParentPressed(item.subParent);
                }}
              >
                <Text
                  style={[
                    styles.subParentText,
                    {
                      color: item.id === subParentPressed ? "white" : "#127cc0",
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </Pressable>
            ) : item.subParent === parentPressed ? (
              <Pressable
                style={[
                  styles.subParent,
                  {
                    backgroundColor:
                      item.id === subParentPressed ? "#127cc0" : "#95dcfc",
                  },
                ]}
                onPress={() => {
                  setSubParentPressed(item.id);
                  setParentPressed(item.subParent);
                }}
              >
                <Text
                  style={[
                    styles.subParentText,
                    {
                      color: item.id === subParentPressed ? "white" : "#127cc0",
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </Pressable>
            ) : null
          }
        />
      </View>
      <View style={{ marginBottom: 100 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            if (item.category === subParentPressed) {
              return (
                <ProductCard
                  product={item}
                  onPressHandler={() => {
                    navigation.navigate("Detail", { product: item });
                  }}
                />
              );
            } else if (parentPressed) {
              if (subParentPressed) {
                return null;
              }
              for (let i = 0; i < subParents.length; i++) {
                if (subParents[i].subParent === parentPressed) {
                  if (subParents[i].id === item.category) {
                    return (
                      <ProductCard
                        product={item}
                        onPressHandler={() => {
                          navigation.navigate("Detail", { product: item });
                        }}
                      />
                    );
                  }
                }
              }
            } else {
              if (subParentPressed || parentPressed) {
                return null;
              }
              return (
                <ProductCard
                  product={item}
                  onPressHandler={() => {
                    navigation.navigate("Detail", { product: item });
                  }}
                />
              );
            }
          }}
        />
      </View>
    </View>
  );
}
