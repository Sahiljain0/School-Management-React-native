import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const FirstPage = (props) => {
  
  
  return (
   
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <View style={styles.iconContainer}>
          <Image source={require("../assets/Graduation.png")} style={styles.icon} />
        </View>

        <View style={styles.buttonsContainer}>
          <Text style={{ fontSize: 30, fontWeight: 600, marginBottom: 10 }}>
            Welcome
          </Text>
          <Text style={{ fontSize: 20, fontWeight: 400, marginBottom: 35 }}>
            To Smart School App
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Login',{person:'Student'})} underlayColor='#085076'   activeOpacity={0.8} >
            <Text style={{ fontSize: 20, fontWeight: 400, color: "white" }}>
              Login as Parent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Login' ,{person:'Teacher'})}  underlayColor='#085076'  activeOpacity={0.8} >
            <Text style={{ fontSize: 20, fontWeight: 400, color: "white" }}>
              Login as Teacher
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Login',{person:'Principle'})}  underlayColor='#085076'  activeOpacity={0.8} >
            <Text style={{ fontSize: 20, fontWeight: 400, color: "white" }}>
              Login as Principal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  blueBackground: {
    backgroundColor: "#085076",
    alignItems: "center",

    width: "100%",
    height: "100%",
  },
  iconContainer: {
    marginTop: "45%",
  },
  icon: {
    width: 110,
    height: 110,
  },
  loginInfo: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    marginTop: 500,
    backgroundColor: "white",
    padding: 10,
    height: 300,
    width: "100%",
  },

  buttonsContainer: {
    padding: 60,
    marginTop: 70,
    display: "flex",
    alignItems: "center",
    height: "50%",
    width: "100%",
    backgroundColor: "white",
    flex: 2,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#085076",
    borderColor: "white",
    alignItems: "center",
    borderWidth: 2,

    margin: 12,
    width: 320,
    height: "20%",
    borderRadius: 70,
  },
});

export default FirstPage;