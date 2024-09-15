import React from 'react'
import { StyleSheet,Text,View } from 'react-native';
import Ionicon from "react-native-vector-icons/Ionicons";

const ProComponent = () => {
  return (
    <View style={styles.parent}>
    <View style={styles.elmstyle}>
    <Ionicon name="body-outline" size={30} color={'blue'}>Adhar Card</Ionicon>

{/* <Text style={styles.textstyle}>profile</Text> */}
    </View>
    </View>
  )
}

const styles=StyleSheet.create({

elmstyle:{

 
    
    marginTop:20,
    height:60,
    marginVertical:7,
    // change 40 to 100
    width:320,
    marginLeft:27,
    backgroundColor:'white',
   
    borderRadius:10,
    borderColor:'blue',
    
    
    borderRadius: 20,
    elevation: 10,
    shadowColor: "blue",
    shadowOpacity: 0.16,
    shadowRadius: 3,
    
    // height={100}
    // width={100}
    // borderRadius={20}
    // shadowColor={"blue"}
},
textstyle:{
    color:'black',
  

    fontSize:20,
    textAlign:'center'
},
parent:{
 
justifyContent:'center',
alignItems:'center'
}

})

export default ProComponent