import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Card } from "react-native-shadow-cards";
import Header from "./Header/Header";

let CardComponent = () => {
  return (
    <View style={{flex:1}}>
      

 
    <View style={styles.container}>
      
      <Card style={styles.cardstyle}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Card>

      <Card style={styles.cardstyle}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Card>
      <Card style={styles.cardstyle}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Card>
      <Card style={styles.cardstyle}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Card>
      <Card style={styles.cardstyle}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Card>
      <Card style={styles.cardstyle}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Card>
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",



   
  },
  cardstyle: {
    padding: 23,
    margin: 13,
    elevation: 10,
    borderColor: "black",
    borderRadius: 16,
    borderColor:'blue'


    

   
  },
});
export default CardComponent;
