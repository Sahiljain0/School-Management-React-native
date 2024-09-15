import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import Icons from "react-native-vector-icons/Ionicons";
import { useEffect,useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Header/Header'
import Carousel from '../Slider/Slider';
import TeacherMainScreenLoadingAmination from '../PreLoaderAnimation/TeacherMainScreenLoadingAmination';

const TeacherMainSreen = (props) => {
    const [LoadingPage,setLoadingPage]=useState(true)


//     useEffect(()=>{
// setLoadingPage(false)
//     },[])
   const Timefunction=()=>{
    setLoadingPage(false)
   }
const Timeout=setTimeout(Timefunction,2000);
  return (

   
    <View style={{height:'100%'}}>


        {/* this is checked code */}

        {LoadingPage ? (
            <View style={{height:'100%'}}>
       <TeacherMainScreenLoadingAmination/>
       </View>
      ) : (
       <>
     


        {/* this is for header */}
      <View><View style={styles.mainHaeder}></View></View>
      <ScrollView>

     <View style={styles.SliderContainer} >


        <Carousel/>
     </View>

      <View><Text style={styles.font}>subject</Text></View>


      {/* this is for subject container */}
      

      <View  style={styles.subjectparent}>

<View style={styles.subjectChild}>
    
    <View style={styles.iconcontainer}>
    <TouchableHighlight    underlayColor='orange'>
    <Icon name="book" size={50} color="yellow" />
    </TouchableHighlight>

    </View> 

    <Text style={styles.txt}>maths</Text>
   

</View>
<View style={styles.subjectChild}>
    <View style={[styles.iconcontainer,styles.iconcontainerChangeColor2]}>
    <Icon name="book" size={50} color="yellow" />

    </View>
    <Text style={styles.txt}>English</Text>

</View>
<View style={styles.subjectChild}>
    <View style={[styles.iconcontainer ,styles.iconcontainerChangeColor3]}>
    <Icon name="book" size={50} color="yellow" />

    </View>
    <Text style={styles.txt}>Physics</Text>

</View>
<View style={styles.subjectChild}>
    <View style={[styles.iconcontainer ,styles.iconcontainerChangeColor4]}>
    <Icon name="book" size={50} color="yellow" />

    </View>
    <Text style={styles.txt}>Biology</Text>

</View>
<View style={styles.subjectChild}>
    <View style={[styles.iconcontainer ,styles.iconcontainerChangeColor1]}>
    <Icon name="book" size={50} color="yellow" />

    </View>
    <Text style={styles.txt}>Science</Text>

</View>
<View style={styles.subjectChild}>
    <View style={[styles.iconcontainer , styles.iconcontainerChangeColor5]}>
    <Icon name="book" size={50} color="yellow" />

    </View>
    <Text style={styles.txt}>EVS</Text>

</View>


      </View>



      {/* this is for assignment container */}
    
      <View><Text style={styles.font}>Information</Text></View>



  
<View style={styles.InformationParentBOX}>

    <TouchableHighlight style={styles.InformationBOX} onPress={()=>props.navigation.navigate('Eventfeed')} underlayColor={'rgb(71 186 180)'} activeOpacity={0.5}>
        <>
        
        <View  style={styles.iconBOXcontainer}>
        
            <Icon name="book" size={50} color="grey" />
           
            </View>
            <View  style={styles.txtContainer}><Text style={styles.middletxt}>Event Feed</Text></View>

        <View style={styles.RightIcon}><Icon name="arrow-right" size={20} color="white" /></View>
       
        </>

    </TouchableHighlight>
    <View style={styles.InformationBOX}>
        <View  style={styles.iconBOXcontainer}>
            <Icon name="book" size={50} color="grey" />
            </View>
            <View  style={styles.txtContainer}><Text style={styles.middletxt}>Result Upload</Text></View>

          <View style={styles.RightIcon}><Icon name="arrow-right" size={20} color="white" /></View>
        


    </View>
    <TouchableHighlight style={styles.InformationBOX} onPress={()=>props.navigation.navigate('Sendnotificationpage')} underlayColor={'rgb(71 186 180)'}>
        <>
        <View  style={styles.iconBOXcontainer}>
            <Icon name="book" size={50} color="grey" />
            </View>
            <View  style={styles.txtContainer}><Text style={styles.middletxt}>Send Notification</Text></View>

      <View style={styles.RightIcon}><Icon name="arrow-right" size={20} color="white" /></View>
        
      </>

    </TouchableHighlight>
    <View style={styles.InformationBOX}>
        <View  style={styles.iconBOXcontainer}>
            <Icon name="book" size={50} color="grey" />
            </View>
            <View  style={styles.txtContainer}><Text style={styles.middletxt}>Progress</Text></View>

      <View style={styles.RightIcon}><Icon name="arrow-right" size={20} color="white" /></View>
        


    </View>
    <TouchableHighlight style={styles.InformationBOX} onPress={()=>props.navigation.navigate('subject')} underlayColor={'rgb(71 186 180)'} activeOpacity={0.5}>
        <>
        <View  style={styles.iconBOXcontainer}>
            <Icon name="book" size={50} color="grey" />
            </View>
            <View  style={styles.txtContainer}><Text style={styles.middletxt}>Digital Library</Text></View>
       

           <View style={styles.RightIcon}><Icon name="arrow-right" size={20} color="white" /></View> 
        

           </>
    </TouchableHighlight>
    

</View>

</ScrollView>
</>)}
</View>
  
    
   
  )
 
}
const styles = StyleSheet.create({

    subjectChild:{
       justifyContent:'center',
       alignItems:'center',

      
        flexDirection:'column',
        width:'30%',
        height:120,
        marginBottom:13
    },
    subjectparent:{
      
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-evenly',
        marginTop:20,
        width:'100%'

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
        fontSize:23,
        
        fontWeight:'500',
        marginVertical:17,
        marginLeft:20
       
        
    },
    InformationBOX:{
      
      borderWidth:0.5,
       flexDirection:'row',
       flexWrap:'wrap',
       justifyContent:'space-between',
       height:80,
       width:'85%',
       marginLeft:26,
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
    RightIcon:{
       backgroundColor:'black',
marginTop:20,
width:40,
height:40,
       marginRight:20,
       justifyContent:"center",
       alignItems:'center',
     borderRadius:90,
      

    },
    middletxt:{
        fontSize:17,
        fontWeight:'500',
       
    },
    txtContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
    ,
    RightIconcontainer:{
        justifyContent:'center',
        alignItems:'center',
        width:70
    },
    iconcontainerChangeColor1:{
        backgroundColor:'rgb(71 186 180)'
    },
    iconcontainerChangeColor2:{
        backgroundColor:'rgb(112 190 231)'
    },
    iconcontainerChangeColor3:{
        backgroundColor:'pink'
    },
    iconcontainerChangeColor4:{
        backgroundColor:'rgb(163 128 185)'
    },
    iconcontainerChangeColor5:{
        backgroundColor:'rgb(53 228 68)'
    },






    // changes

    SliderContainer:{
        marginVertical:25,
        width:'95%',
        marginLeft:17,
        marginRight:10
        // marginRight:0
        

       
    },
    mainHaeder:{
        width: "100%",

        // mene height ko cahnge hai 170 se 100 par satck navigation ke liye
        height: 180,
        backgroundColor: "rgb(19 99 154)",
        borderBottomLeftRadius: 34,
        borderBottomRightRadius: 34,
    }

    
   
})
export default  TeacherMainSreen ;

