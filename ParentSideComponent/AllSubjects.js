import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";


const items=[

    {
        title:'Basic of computer',
        logo:'anchor'
    },
    {
        title:'Data Structure',
        logo:'book'
    },
    
    {
        title:'Theory of Machine'
        ,
        logo:'bookmark'
    },
    
    {
        title:'computer pdf',
        logo:'rocket'
    },
    
    {
        title:'Design Principles',
        logo:'fire'
    },
    
]

const CompleteNavigation = (props) => {
  return (
    

    // ye view ,e abhi ke liye style lagaya hai
    <View  style={{backgroundColor:'white'}}>
      {/* navigation ke liye comment kiya hai */}
      {/* <View style={styles.HeaderContainer}></View> */}

      <View style={styles.ParentContainer}>
        <ScrollView>



        {
            items.map((data)=>
            
            
            <TouchableOpacity onPress={()=>props.navigation.navigate('download')}  activeOpacity={0.6}  underlayColor='red'  >
            <View style={styles.ChildItem}   >
              <View style={styles.box}>
                <Icon name={data.logo} size={35} color='rgb(222 250 255)' />
              </View>
              <View style={styles.description}>
                <View><Text style={styles.uppertext}>{data.title}</Text>
                <Text style={styles.lowertext}>please upload pdf file only computer</Text></View>
                
               <View><Text>Due,27 july 2026</Text></View> 
              </View>
    
              <View style={styles.dateContainer}>
                <Text  style={styles.date}>14-6-2033</Text>
              </View>
            </View>
            </TouchableOpacity>
            
            )
        }
        </ScrollView>

       
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    width: "100%",
    height: 170,
    backgroundColor: "rgb(19 99 154)",
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
  },

  box: {
    backgroundColor: "rgb(98 155 193)",
    width: 90,
    height:80,
    marginVertical: 6,
    
    // width:'25%',
    // marginHorizontal:14,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    elevation: 4,
  },
  ChildItem: {
   borderColor:'darkgrey',
   borderWidth:1,
    backgroundColor: "white",

    flexDirection: "row",
    marginVertical:10,
    borderRadius:20,
    width:'97%',
    marginLeft:5
  },
  description: {
   flex:1,
   justifyContent:'center',
    marginHorizontal:10
  },
  dateContainer:{
    
    paddingHorizontal:8,
    paddingVertical:6
  },
  date:{
    fontSize:15,
    color:'black'
  },
  uppertext:{
    fontSize:17,
    fontWeight:'500'
  }
  ,
  lowertext:{
    fontSize:13
  },

  // additional ke liye 

});

export default CompleteNavigation;
