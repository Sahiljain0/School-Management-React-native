import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const Carousel = () => {
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animated: true, // Change "animation" to "animated"
        });
        setActiveIndex(0);
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
        setActiveIndex(activeIndex + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const carouselData = [
    {
      id: "01",
      image: require("../assets/slider2.jpg"),
    },
    {
      id: "02",
      image: require("../assets/secondsl.jpg"),
    },
    {
      id: "03",
      image: require("../assets/thirdsl.jpg"),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={{borderRadius:20}} >
        <Image source={item.image} style={{ height: 200, width: screenWidth ,borderRadius:10}} />
      </View>
    );
  };

  const handleScroll = useCallback((event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth); // Round to the nearest integer
    setActiveIndex(index);
  }, []);

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => (
      <View
        key={index}
        style={{
          backgroundColor: activeIndex === index ? "green" : "red",
          height: 10,
          width: 10,
          borderRadius:5,
          marginHorizontal: 6,
         
        }}
      ></View>
    ));
  };

  return (
    <View  >
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}

       
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
