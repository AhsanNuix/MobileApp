import { View, Text, FlatList, Dimensions } from "react-native";
import React, {useState} from "react";
import { Card } from "react-native-paper";
import styles from "./style";
import carousel from "../../assets/data/carousel.json";
import Carousel from 'react-native-snap-carousel';
const windowWidth = Dimensions.get("window").width;
export default function CarouselImage() {
  const [activeIndex , setActiveIndex] = useState(0)
  return (
    <View style={{flex:1 , width:windowWidth}}>
      <Carousel
        sliderWidth={windowWidth}
        loop
        layout={"default"}
        data={carousel}
        autoplay={true}
        autoplayDelay={6000}
        autoplayInterval={6000}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        itemWidth={windowWidth}
        renderItem={({item}) => (
          <Card style={styles.container}>
            <Card.Cover
              source={{ uri: item.image }}
            />
          </Card>
        )}
        onSnapToItem={(activeIndex) => setActiveIndex({ activeIndex })}
      />
    </View>
  );
}
