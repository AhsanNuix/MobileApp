import { View, Text, Pressable, ScrollView, Dimensions ,Image} from "react-native";
import React, { useState, useRef, useContext, useEffect } from "react";
import { Button, Card } from "react-native-paper";
import Header from "../../components/header";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { Store } from "../../contexts/context";
import QuantitySelector from "../../components/quantitySelector";

export default function ProductDetail(props) {
  const navigation = useNavigation();
  const refRBSheetPrecautions = useRef();
  const refRBSheetEffects = useRef();
  let [render, setRender] = useState(true);

  useEffect(() => {
    setRender(
      cartArray.find((current) => current === props.route.params.product)
        ? false
        : true
    );
  }, [cartArray]);

  const SlideButton = (props) => {
    return (
      <Pressable
        style={styles.effectView}
        onPress={() => {
          if (props.title === "Precautions") {
            refRBSheetPrecautions.current.open();
          } else if (props.title === "Side Effect") {
            refRBSheetEffects.current.open();
          }
        }}
      >
        <Text style={styles.effectButton}>{props.title}</Text>
        <AntDesign name="right" size={26} color="#127cc0" />
      </Pressable>
    );
  };
  const BottomSheetPrecautions = () => {
    return (
      <RBSheet
        height={Dimensions.get("window").height - 100}
        ref={refRBSheetPrecautions}
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
              <Text style={styles.bottomSheetHeaderText}>Precautions</Text>
            </View>
            <Pressable onPress={() => refRBSheetPrecautions.current.close()}>
              <Entypo
                style={{ margin: 10 }}
                name="cross"
                size={24}
                color="gray"
              />
            </Pressable>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={styles.company}>
              {props.route.params.product.precautions}
            </Text>
          </View>
        </View>
      </RBSheet>
    );
  };
  const BottomSheetEffect = () => {
    return (
      <RBSheet
        height={Dimensions.get("window").height - 100}
        ref={refRBSheetEffects}
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
              <Text style={styles.bottomSheetHeaderText}>Side Effect</Text>
            </View>
            <Pressable onPress={() => refRBSheetEffects.current.close()}>
              <Entypo
                style={{ margin: 10 }}
                name="cross"
                size={24}
                color="gray"
              />
            </Pressable>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={styles.company}>
              {props.route.params.product.effect}
            </Text>
          </View>
        </View>
      </RBSheet>
    );
  };
  const { setCartArray, cartArray, prod, setProd } = useContext(Store);
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <BottomSheetPrecautions />
      <BottomSheetEffect />
      <View style={styles.buttonHeader}>
        <Pressable
          style={{ margin: 10 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={26} color="#127cc0" />
        </Pressable>
      </View>
      <ScrollView>
        <Card style={styles.card}>
        <View style={styles.points}>
        <Image style={styles.star} source={require('../../assets/images/star.png')}/>
        <Text style={styles.starText}>{props.route.params.product.point}</Text>
      </View>
          <Card.Cover
            style={styles.image}
            source={{ uri: props.route.params.product.image }}
          />
          <Card.Actions>
            <View style={styles.Button}>
              <Pressable style={styles.zoom}>
                <Feather name="zoom-in" size={26} color="#127cc0" />
              </Pressable>
              <Pressable style={styles.share}>
                <Entypo name="share" size={22} color="#127cc0" />
              </Pressable>
            </View>
          </Card.Actions>
        </Card>
        <View style={styles.innerContainerOne}>
          <View>
            <Text style={styles.title}>{props.route.params.product.title}</Text>
          </View>
          <View>
            <Text style={styles.company}>
              {props.route.params.product.company}
            </Text>
          </View>
          <View>
            <Text
              style={[styles.company, { fontWeight: "bold", fontSize: 20 }]}
            >
              Rs. {props.route.params.product.price}/Pack
            </Text>
          </View>
          <View>
            <Text
              style={[styles.company, { paddingVertical: 10, paddingRight: 5 }]}
            >
              {props.route.params.product.detail}
            </Text>
          </View>
        </View>
        <SlideButton title="Precautions" />
        <SlideButton title="Side Effect" />
        <SlideButton title="Reviews" />
      </ScrollView>
      <View style={styles.cartView}>
        {render ? (
          <Pressable
            style={styles.cartButton}
            onPress={() => {
              setCartArray(cartArray.concat([props.route.params.product]));
              setRender(false);
            }}
          >
            <Text style={styles.ButtonText}>Add to Cart</Text>
          </Pressable>
        ) : (
          <QuantitySelector
            onPressDelete={() => {
              setRender(true);

            }}
            product={props.route.params.product}
          />
        )}
      </View>
    </View>
  );
}
