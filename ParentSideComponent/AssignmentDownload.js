import { View, Text, StyleSheet, TouchableHighlight,Modal } from "react-native";
import { useState } from "react";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicon from 'react-native-vector-icons/Ionicons'
import Header from "../Header/Header";



const AssignmentDownload = () => {
let [showmodal,SetShowmodal]=useState(false)

  return (
    <View style={{flex:1 ,backgroundColor:'rgb(230 233 235)'}}>
      <Header/>
      {/* <View style={styles.HeaderContainer}></View> */}
      <View>
        <View style={styles.BoxContainer}>
          <Text style={styles.normaltext}>assignment name</Text>
          <Text style={styles.highlighttext}>Computer science</Text>
        </View>

        <View style={styles.BoxContainer}>
          <Text style={styles.normaltext}>assignment name</Text>
          <Text style={styles.highlighttext}>Computer science</Text>
        </View>
        <View style={styles.BoxContainer}>
          <Text style={styles.normaltext}>assignment name</Text>
          <Text style={styles.highlighttext}>Computer science</Text>
        </View>
       
        <View style={styles.downloadcontainer}>
         
          <Text style={styles.highlighttext}>click to download this url</Text>
          <TouchableHighlight onPress={() => SetShowmodal(true)}  underlayColor='white' >
            <View>
              <Icon name="download" size={40} color="rgb(19 99 154)" />
            </View>
          </TouchableHighlight>
        </View>
      </View>

      

      <Modal
      
      visible={showmodal}
      transparent={true}
      animationType="slide"
      
      >
        <TouchableHighlight onPress={()=>SetShowmodal(false)} underlayColor={'rgb(255 255 255 / 0%)'} activeOpacity={0.2}>
<View  style={styles.modalbox}>
<View style={styles.modal}>

  

<TouchableHighlight onPress={()=>SetShowmodal(false)} underlayColor='#e1e1e1'>
  <View style={styles.LogoPosition}>
  <Ionicon name="close-outline"  size={45} color={'grey'} fontWeight='600' ></Ionicon>
  </View>

</TouchableHighlight>

</View>


</View>
</TouchableHighlight>

      </Modal>
      


     
    </View>
  );
};

export default AssignmentDownload;
const styles = StyleSheet.create({
  HeaderContainer: {
    width: "100%",
    height: 170,
    backgroundColor: "rgb(19 99 154)",
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
  },
  BoxContainer: {
    backgroundColor: "rgb(251 251 251)",
    height: 80,
    width: "85%",
    marginLeft: 24,
    marginVertical: 15,
    borderRadius: 19,
    flexDirection: "column",
    justifyContent: "center",
    shadowColor: "blue",
    elevation: 10,
  },
  highlighttext: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 12,
  },
  normaltext: {
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 15,
  },
  downloadcontainer: {
    backgroundColor: "rgb(251 251 251)",
    height: 80,
    width: "85%",
    marginLeft: 24,
    marginVertical: 15,
    borderRadius: 19,
    flexDirection: "row",
    justifyContent:'space-around',
   alignItems:'center',
    shadowColor: "blue",
    elevation: 10,
  },
  modalbox:{



  //  backgroundColor:'rgb(213 204 204 / 15%)',
   
    
  
 
  height:'100%',
 justifyContent:'flex-end'
   
   

  },
  modal:{
    backgroundColor:'rgb(255, 255, 255)',
   
    height:'30%',
    
   
    
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
    // justifyContent:'center',
    // alignItems:'center',
    shadowColor: "blue",
    elevation: 70,
  },
  LogoPosition:{
    position:'absolute',
    top:4,
    right:13,
    // backgroundColor:'red'
  }
 


 
});
