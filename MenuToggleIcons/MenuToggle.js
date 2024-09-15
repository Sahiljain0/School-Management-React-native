import React, { useEffect, useState } from "react";
import { Button, StatusBar, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";

function MenuToggle(props) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
 
  useEffect(()=>{
    setModalVisible(true);
  },[])

  return (
    <View style={styles.flexView}>
      <StatusBar/>
      <View style={styles.btnContainer}>
        <Button title="Show Bottom Sheet" onPress={toggleModal} />
      </View>

      <Modal
        onBackdropPress={() =>  setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
            {/* <Text style={styles.text}>Welcome To My Bottom Sheet</Text> */}
            {/* yaha se new code */}
            <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.upperBox}>
          <View style={styles.profileIcon}></View>
          <Text style={styles.profileName}>Sahil jain</Text>
          <Icon name="chevron-forward" size={24} style={styles.moreIcon} />
        </View>
        <View style={styles.line} />
       
          <View style={styles.iconRow}>
            {renderIcon("home")}
         {renderIcon("search")}
            {renderIcon("settings")}
          </View>
          <View style={styles.iconRow}>
            {renderIcon("mail")}
            {renderIcon("notifications")}
            {renderIcon("help-circle")}
          </View>
       
      </View>
    </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const renderIcon = (iconName) => (
  <View>
    

   

 
    <View style={styles.iconSquare}>
    <TouchableHighlight onPress={()=>props.navigation.navigate('settingpage')} underlayColor={'white'}>
      <Icon name={iconName} size={40} style={styles.menuIcon} />
      </TouchableHighlight>
    </View>
    
    </View>
  );



export default MenuToggle;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 400,
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  text: {
    color: "#bbb",
    fontSize: 24,
    marginTop: 100,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },




// new code inserted





    // container: {
    //   position: "absolute",
    // //   bottom: 0,
    
    //   height: 400,
    
    //   left: 0,
    //   right: 0,
    //   flex: 1,
    //   justifyContent: "center", // Center vertically
    //   alignItems: "center", // Center horizontally
    // },
    menuContainer: {
      width: "90%", // Set the width to 90%
      backgroundColor: "white",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: "auto",
    },
    upperBox: {
      height: 150,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 35,
    },
    profileIcon: {
      width: 80,
      height: 80,
      backgroundColor: "gray",
      borderRadius: 50,
    },
    profileName: {
      fontSize: 20,
      fontWeight: "bold",
    },
    moreIcon: {
      color: "black",
    },
    iconContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      paddingHorizontal: 20,
    },
    iconRow: {
      flexDirection: "row",
      justifyContent: "space-around", // Equal spacing horizontally
      alignItems: "center", // Center vertically
    },
    iconSquare: {
      width: 70,
      height: 70,
      borderRadius: 10, // Add border radius
      backgroundColor: "rgb(171, 179, 178)",
      alignItems: "center",
      justifyContent: "center",
      margin: 15, // Add margin for spacing
    },
    line: {
      width: "90%",
      height: 1, // Thin line height
      backgroundColor: "red", // Color of the line
      alignSelf: "center",
    },
    menuIcon: {
      color: "rgb(1, 135, 121)", // Set the icon color
    },














});