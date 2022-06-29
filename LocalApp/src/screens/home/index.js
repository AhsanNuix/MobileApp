import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/index";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import CarouselImage from "../../components/carouselImage/index";
import ProductCard from "../../components/productCard/index";
import { AntDesign } from "@expo/vector-icons";
import HealthConcern from "../../components/healthConcern/index";
import CategoryCard from "../../components/categoryCard/index";
import category from "../../assets/data/category.json";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Store } from "../../contexts/context";
export default function HomeScreen() {
  const navigation = useNavigation();
  const ProductFlatList = () => {
    const { prod } = useContext(Store);
    return (
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={prod}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPressHandler={() => {
                navigation.navigate("Detail", { product: item });
              }}
            />
          )}
        />
      </View>
    );
  };
  const CategoryFlatList = () => {
    return (
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={category}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            item.parent === null ? (
              <CategoryCard
                category={item}
                onPressHandler={() => {
                  navigation.navigate("Filter", { category: item });
                }}
              />
            ) : null
          }
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ marginBottom: 30 }}>
        <View style={styles.top}>
          <View style={styles.logoView}>
            <Text style={styles.title}>Servaid</Text>
            <Image
              style={styles.logo}
              source={{
                uri: "https://donation.servaid.com.pk/theme/images/ph/medicine.png",
              }}
            />
          </View>
          <Text style={styles.underTitle}>Pakistan`s No. 1 Pharmacy</Text>
          <Pressable
            style={styles.searchBar}
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <FontAwesome name="search" size={28} color="#127cc0" />
            <Text style={styles.searchbarText}> Search Product Here</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View>
          <CarouselImage />
        </View>
        <View style={styles.tags}>
          <View style={[{ backgroundColor: "#e83e8c" }, styles.tag_one]}>
            <Text style={styles.tag_text}>
              Place your order instantly within seconds
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="right" size={28} color="white" />
              <Image
                style={styles.tag_image}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/5929/5929465.png",
                }}
              />
            </View>
          </View>
          <View style={[{ backgroundColor: "#20c997" }, styles.tag_one]}>
            <Text style={styles.tag_text}>
              Got a prescription? Upload and get your meds now!
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="right" size={28} color="white" />
              <Image
                style={styles.tag_image}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2038/2038022.png",
                }}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.textTitle}>Baby Care</Text>
        </View>
        <ProductFlatList />
        <View>
          <Text style={styles.textTitle}>Shop by Health Care</Text>
        </View>
        <View>
          <HealthConcern navigate={navigation} />
        </View>
        <View>
          <Text style={styles.textTitle}>Immunity Boosters</Text>
        </View>
        <ProductFlatList />
        <View>
          <Text style={styles.textTitle}>Categories</Text>
        </View>
        <CategoryFlatList />
        <View>
          <Text style={styles.textTitle}>Covid-19 Essentials</Text>
        </View>
        <ProductFlatList />
      </ScrollView>
    </View>
  );
}
