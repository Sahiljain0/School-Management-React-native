import { StyleSheet, Text, View,TouchableHighlight, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native';
import React from 'react'
import Carousel from '../Slider/Slider'
import Icon from 'react-native-vector-icons/FontAwesome';



const Maincontent = () => {
  return (
    <ScrollView>
    <View >
      <View style={styles.HeaderContainer}>


      </View>
     


      <View style={styles.SliderContainer}>
<Carousel/>

      </View>
      <View><Text style={styles.font}>my subject</Text></View>
    

      <View style={styles.Subject}>
      

   
   <View style={[styles.box,styles.change]}>
 
 <Icon name="book" size={50} color="yellow" />
 </View>
 

      


<View style={styles.box}>
  <TouchableOpacity onPress={()=>alert('chal gya')}><Icon name="book" size={50} color="yellow" />
  </TouchableOpacity>
 
 

 </View>


<View style={[styles.box,styles.change]}>
 
<Icon name="bookmark" size={50} color="yellow" />
</View>
<View style={styles.box}>
 
<Icon name="book" size={50} color="yellow" />
</View>
<View style={[styles.box,styles.change]}>
 
<Icon name="book" size={50} color="yellow" />
</View>
<View style={styles.box}>
 
<Icon name="square-gitlab" size={50} color="yellow" />
</View>
<View style={[styles.box,styles.change]}>
 
<Icon name="bookmark" size={50} color="yellow" />
</View>
<View style={styles.box}>
 
<Icon name="book" size={50} color="yellow" />
</View>
<View style={[styles.box,styles.change]}>
 
<Icon name="book" size={50} color="yellow" />
</View>


     
     
    </View>
     
    </View>
    </ScrollView>
  )
}

export default Maincontent

const styles = StyleSheet.create({


    HeaderContainer:{
        width:'100%',
        height:170,
        backgroundColor:'rgb(19 99 154)',
        borderBottomLeftRadius:34,
        borderBottomRightRadius:34
    },
    font:{
        fontSize:23,
        
        fontWeight:'500',
        marginVertical:25,
        marginLeft:20
       
        
    }
    ,SliderContainer:{
        marginVertical:25,
        width:'95%',
        marginLeft:10
        

       
    },

    Subject:{
backgroundColor:'white',


flexDirection:'row',
flexWrap:'wrap',





    },
    box:{
        backgroundColor:'orange',
        width:100,
        marginVertical:6,
        height:100,
        width:'25%',
        marginHorizontal:14,
        borderRadius:19,
        justifyContent:"center",
        alignItems:'center',
        shadowColor:'black',
        elevation:4
        
    }
    ,change:{
       backgroundColor:'skyblue'
    },




//     boxparent:{

// flex:1,
// width:120,
// flexDirection:'column',
// flexWrap:'wrap',


//     },
//     childbox:{
//       backgroundColor:'green',
//       height:70,
//       justifyContent:'center',
//       alignItems:'center',
//       marginHorizontal:14,
//         borderRadius:19,
//         justifyContent:"center",
//         alignItems:'center',
//         shadowColor:'black',
//         elevation:4
      
//     },
//     txt:{
     
//       backgroundColor:'white',
//      width:'100%',
//      marginTop:30
    
//     }

})