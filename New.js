import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Profile from "./Profile";
import CardComponent from "./Card";
import ProComponent from "./ProComponent";

const New = () => {
  return (
    

   
    <View >
      <View style={compstyle.elm}>
        <Text style={{ textAlign: "center" }}>Profile</Text>
      </View>
     <View>
<Profile/>
     
     </View>
    
    
    
    </View>
    
  );
};

let compstyle = StyleSheet.create({
  elm: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    color: "white",
    backgroundColor: "rgb(0 223 255);",
    padding: 65,
    width: "100%",
    textAlignVertical: "center",
    textAlign: "center",
  },

  cont:{

    backgroundColor:'white'
  }
});

export default New;
