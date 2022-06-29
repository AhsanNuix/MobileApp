import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import Header from "../../components/header";
import { Card, ProgressBar } from "react-native-paper";
import styles from "./style";
export default function RewardPoints() {
  let myPoint = 10000;
  const array = [
    {
      id: 1,
      point: 10000,
      cash: 100,
    },
    {
      id: 2,
      point: 20000,
      cash: 200,
    },
    {
      id: 3,
      point: 30000,
      cash: 300,
    },
    {
      id: 4,
      point: 40000,
      cash: 400,
    },
    {
      id: 5,
      point: 50000,
      cash: 500,
    },
    {
      id: 6,
      point: 60000,
      cash: 600,
    },
  ];
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Card style={styles.pointCard}>
        <View style={styles.view1}>
          <Text style={styles.text}>*Your Balance</Text>
        </View>
        <View style={styles.view2}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.image}
              source={require("../../assets/images/star.png")}
            />
            <Text style={styles.pointText}>13405</Text>
            <Text style={{ marginTop: 20, marginLeft: 10, fontWeight: "bold" }}>
              Points
            </Text>
          </View>
          <Text style={styles.expireText}>
            13405 will expire on may 24, 2022
          </Text>
        </View>
        <View style={styles.view3}>
          <Text style={{ fontSize: 18 }}>Credit Available</Text>
          <Text style={styles.moneyText}>Rs .0</Text>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3835/3835774.png",
            }}
            style={{ width: 120, height: 120, alignSelf: "flex-end" }}
          />
        </View>
      </Card>
      <ScrollView horizontal>
        <Card style={styles.card2}>
          <FlatList
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 2,
                  backgroundColor: "#b1e3fa",
                  marginBottom: 15,
                }}
              />
            )}
            data={array}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.innerView}>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={{ width: 40, height: 40, margin: 20 }}
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/1041/1041888.png",
                      }}
                    />
                    <View style>
                      <Text style={styles.pointCash}>RS. {item.cash}</Text>
                      <Text style={{ color: "gray" }}>
                        {item.point - myPoint} more points to go
                      </Text>
                      <ProgressBar
                        progress={myPoint / item.point}
                        color={"gold"}
                        style={styles.progress}
                      />
                    </View>
                  </View>
                  <View style={styles.lock}>
                    <Text style={styles.lockText}>Locked</Text>
                  </View>
                </View>
              );
            }}
          />
        </Card>
      </ScrollView>
    </ScrollView>
  );
}
