import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Header from "../Header/Header";
import { useEffect } from "react";
import { useState } from "react";



function EventFeeds() {
  const [data,setData]= useState(null)

          useEffect(()=>{
                const getdata = async()=>{
                    try{
                      const res = await fetch('http://192.168.129.69:5000/api/v1/getAllEvents');
                      const json = await res.json();
                      setData(json);
                    }catch(err){
                      console.log(err)
                    }
                }

                getdata();
          },[])
  return (
   <View>
    <Header/>
    <ScrollView>
        
      { data && data.map((item) => (
        <View key={item._id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 400,
    margin: 10,
    backgroundColor: "rgba(240, 235, 235, 0.78)",
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 300,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default EventFeeds;