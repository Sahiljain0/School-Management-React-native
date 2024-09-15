import React from "react";
import { View, StyleSheet,Text } from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';

export default TeacherScreenLoading = () => {
  return (
    <View style={{flex:1,height:'100%'}}>
      <View >
      <ShimmerPlaceHolder
        style={styles.Header}
        LinearGradient={LinearGradient}
      />

      </View>

      <View>
        <ShimmerPlaceHolder style={styles.font} LinearGradient={LinearGradient}>

        </ShimmerPlaceHolder>
      </View>
     

      <View style={styles.subjectparent}>
        <ShimmerPlaceHolder style={styles.subjectChild}
        
        LinearGradient={LinearGradient}
        >

          <View
            style={styles.iconcontainer}
          >
            <Icon name="book" size={50} color="yellow" />
          </View>
          <Text style={styles.txt}>Physics</Text>
        </ShimmerPlaceHolder >



        <ShimmerPlaceHolder style={styles.subjectChild}
        
        LinearGradient={LinearGradient}
        >

          <View
            style={styles.iconcontainer}
          >
            <Icon name="book" size={50} color="yellow" />
          </View>
          <Text style={styles.txt}>Physics</Text>
        </ShimmerPlaceHolder >
        <ShimmerPlaceHolder style={styles.subjectChild}
        
        LinearGradient={LinearGradient}
        >

          <View
            style={styles.iconcontainer}
          >
            <Icon name="book" size={50} color="yellow" />
          </View>
          <Text style={styles.txt}>Physics</Text>
        </ShimmerPlaceHolder >
        <ShimmerPlaceHolder style={styles.subjectChild}
        
        LinearGradient={LinearGradient}
        >

          <View
            style={styles.iconcontainer}
          >
            <Icon name="book" size={50} color="yellow" />
          </View>
          <Text style={styles.txt}>Physics</Text>
        </ShimmerPlaceHolder >
        <ShimmerPlaceHolder style={styles.subjectChild}
        
        LinearGradient={LinearGradient}
        >

          <View
            style={styles.iconcontainer}
          >
            <Icon name="book" size={50} color="yellow" />
          </View>
          <Text style={styles.txt}>Physics</Text>
        </ShimmerPlaceHolder >
        <ShimmerPlaceHolder style={styles.subjectChild}
        
        LinearGradient={LinearGradient}
        >

          <View
            style={styles.iconcontainer}
          >
            <Icon name="book" size={50} color="yellow" />
          </View>
          <Text style={styles.txt}>Physics</Text>
        </ShimmerPlaceHolder >
      </View>




      <View>
        <ShimmerPlaceHolder style={styles.fontsecond} LinearGradient={LinearGradient}>

        </ShimmerPlaceHolder>
      </View>



      <View>


      <ShimmerPlaceHolder style={styles.InformationBOX} LinearGradient={LinearGradient}>
        <ShimmerPlaceHolder style={styles.iconBOXcontainer}>
            <Icon name="book" size={50} color="grey" />
            </ShimmerPlaceHolder>
            <View  style={styles.txtContainer}><Text style={styles.middletxt}>Notification</Text></View>

      
        


    </ShimmerPlaceHolder>
    

      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: 200,
    width: "100%",
    // position: "absolute",
    // top: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  subjectparent:{
      
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-evenly',
      marginTop:20,
      width:'100%'

  },
  subjectChild:{
    justifyContent:'center',
    alignItems:'center',

   
     flexDirection:'column',
     width:'30%',
     height:120,
     marginBottom:13,
     borderRadius:20
 },
 iconcontainer:{
  backgroundColor:'orange',
  padding:25,
  borderRadius:17
  
},
txt:{
  fontSize:16,
  fontWeight:'500'
},
font:{
  
  
 height:40,
 borderRadius:10,
  marginVertical:15,
  marginLeft:20
 
  
},
fontsecond:{
  
  
  height:40,
  borderRadius:10,
   marginVertical:-44,
   marginLeft:14
  
   
 },
 InformationBOX:{
      
 
   flexDirection:'row',
   flexWrap:'wrap',
   justifyContent:'space-between',
   height:80,
   width:'85%',
   marginLeft:12,
   marginVertical:11,
   borderRadius:26,


},
iconBOXcontainer:{
  height:68,
  width:90,
  backgroundColor:'rgb(174 235 209)',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  marginVertical:4,
  marginLeft:6,

},
});
