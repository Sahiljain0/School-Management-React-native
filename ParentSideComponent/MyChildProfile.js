import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import Carousel from "../Slider/Slider";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";

const StudentProfile = (props) => {
  return (
    <View style={{  flex:1,height:'100%'}}>
      <View style={styles.HeaderContainer}>
        
       <TouchableHighlight onPress={()=>props.navigation.navigate('SendNotificationPage')} activeOpacity={0.7} underlayColor={'rgb(19 99 154)'}><View style={{alignItems:'flex-end',paddingRight:10,paddingTop:10}}><Ionicon name="notifications-outline" size={35} color="white" /></View></TouchableHighlight>
       
     
       
      </View>
      <ScrollView>
        <View style={styles.SliderContainer}>
          <Carousel />
        </View>

        <View>
          <Text style={styles.font}>my children</Text>
        </View>

        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          <View style={styles.profilecontainer}>
            <TouchableHighlight
              onPress={() => props.navigation.navigate("ChildInfo")}
              underlayColor="rgb(35 97 144)"
            >
              <Image
                source={require("../assets/pic.jpg")}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 90,
                  borderColor: "white",
                  borderWidth: 2.5,
                }}
              />
            </TouchableHighlight>

            <Text style={styles.nametxt}>Anuj sahu</Text>
            <Text style={styles.classtxt}>class 12</Text>

            <View style={styles.iconbox}>
              <TouchableHighlight
                onPress={() => props.navigation.navigate("ChildInfo")}
                underlayColor="pink"
              >
                <Icon name="angle-right" size={30} color="black" />
              </TouchableHighlight>
            </View>
          </View>





  {/* this is another profile code */}













          <View style={styles.profilecontainer}>
            <TouchableHighlight
              onPress={() => props.navigation.navigate("ChildInfo")}
              underlayColor="rgb(35 97 144)"
            >
              <Image
                source={require("../assets/pic.jpg")}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 90,
                  borderColor: "white",
                  borderWidth: 2.5,
                }}
              />
            </TouchableHighlight>

            <Text style={styles.nametxt}>Anuj sahu</Text>
            <Text style={styles.classtxt}>class 12</Text>

            <View style={styles.iconbox}>
              <TouchableHighlight
                onPress={() => props.navigation.navigate("ChildInfo")}
                underlayColor="pink"
              >
                <Icon name="angle-right" size={30} color="black" />
              </TouchableHighlight>
            </View>
          </View>






 {/* yah tak hai code */}





        </View>

      


       

       

        <View style={{marginBottom:40}}>
         
        </View>

      </ScrollView>
    </View>
  );
};

export default StudentProfile;
const styles = StyleSheet.create({
  font: {
    fontSize: 23,

    fontWeight: "500",
    marginVertical: 25,
    marginLeft: 20,
  },
  profilecontainer: {
    backgroundColor: "rgb(35 97 144)",

    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    height: 180,
    borderRadius: 15,
    marginLeft: 16,
  },
  nametxt: {
    fontSize: 17,

    fontWeight: "500",
    color: "white",
  },
  classtxt: {
    fontWeight: "600",
    color: "grey",
  },
  HeaderContainer: {
    width: "100%",
    height: 160,
    backgroundColor: "rgb(19 99 154)",
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
  },
  SliderContainer: {
    marginVertical: 25,
    width: "95%",
    marginLeft: 10,
  },
  iconbox: {
    backgroundColor: "pink",
    borderRadius: 30,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -20,
  },
});
