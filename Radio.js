import React from 'react';
import { useState } from 'react';
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';

const Radio = () => {
    const [buttons , SetButtons]=useState(1)


    const Radios =[
        {
            id: 1,
            skill: "javascript"
        }
        ,
        {
            id: 2,
            skill: "pythin"
        }
        ,

        {
            id: 3,
            skill: "java"
        }
        ,

        {
            id: 4,
            skill: "angular"
        }
        ,

        {
            id: 5,
            skill: "reactjs"
        }
      



    ]
  return (

    <View  style={Radiostyle.parent}>

{
    Radios.map((obj,index)=>  <TouchableOpacity  onPress={()=>SetButtons(obj.id)} >
        
    <View key={index}   style={Radiostyle.child}>
        <View style={Radiostyle.buttons}>
           {
                 buttons ==obj.id ? <View style={[Radiostyle.buttons,Radiostyle.fill]}></View>  :null             
           }

        </View>
    
        <Text>{obj.skill}</Text>
    </View>
    
    </TouchableOpacity> )
}

    </View>
    
  )




}
const Radiostyle=StyleSheet.create({

parent:{
    backgroundColor:"gold",

    flex:1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: -57

    // flex: 1;
    // flexdirection: column;
    // justify-content: center;
    // align-items: center;
    // margin-right: -57px;
},
buttons:{
    borderColor: "blue",
    borderWidth:1,
    padding:10,
    borderRadius:20,

},
child: {
    flexDirection: "row",
    marginVertical:10

},
fill:{
    backgroundColor:"red"
}
}

)

export default Radio