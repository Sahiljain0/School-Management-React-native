import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, TextInput ,Image, Touchable, TouchableHighlight } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import filter from "lodash.filter";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchLoadingAnimation from "../PreLoaderAnimation/SearchLoadingAnimation";
import TeacherMainScreenLoadingAmination from "../PreLoaderAnimation/TeacherMainScreenLoadingAmination";



// const API_USERDATA=`https://randomuser.me/api/?results=30`;
const API_USERDATA=`http://192.168.129.69:5000/api/v1/Students`;

export default function SearchBAR(props) {
    const [isloading,setIsLoading]=useState(false)
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);
    const [fulldata,setFullData]=useState([]);
    const [searchQuery,setsearchQuery]=useState('');



    // use effect hook

useEffect(()=>{
setIsLoading(true);
fetchData(API_USERDATA);
},[])

const fetchData=  async (url)=>{
    try{

        const response=await fetch(url)
        const json=await response.json();
        setData(json)
        setFullData(json)
        console.log(json)
        setIsLoading(false)
    }
    catch(error){
        setError(error);
        setIsLoading(false)
    }


}

// search query ka function
const handleSearch= (query)=>{

    setsearchQuery(query);
    const formatedQuery=query.toLowerCase();
    const fiteredData=filter(fulldata,(user)=>{
        return contains(user,formatedQuery)
    })
    setData(fiteredData)
}



const contains=({name ,email},query)=>{

//     const  {first ,last}=name;
// if(first.includes(query) || last.includes(query) ||email.includes(query)){
//     return true
// }
   
if(name.includes(query) ||email.includes(query)){
    return true
}
else {
    return false
}

}




// loader dikhana

if(isloading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <SearchLoadingAnimation/>

</View>
    );
}



if(error){

    return(

        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Errpr aaya hai fetch krne me</Text>

</View>


    );
}


  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>

        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:15}}>
      <TextInput
        placeholder="search"
        clearButtonMode="always"
        style={{
          paddingHorizontal: 20,
          paddingVertical: 7,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 10,
          width:"90%",
         
        }}
        autoCapitalize="none"
        autoCorrect={false}
onChangeText={(query)=>handleSearch(query)}

      />
      <Text style={{color:'skyblue',marginLeft:4}}>Cancel</Text>

      </View>
      


<FlatList
data={data}
keyExtractor={(item)=> item.name}

renderItem={({item})=>(
<TouchableHighlight onPress={()=>props.navigation.navigate('studentINFO',{item})}  activeOpacity={0.6}   underlayColor='rgb(242, 242, 242)' >
<View style={styles.itemContainer}>

<Image source={{uri: item.image}}  style={styles.image} />

<View>
    <Text style={styles.textName}>{item.name}</Text>
    <Text style={styles.textEmail}>{item.email}</Text>
</View>

</View>
</TouchableHighlight>

)}

/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //     flex:1,
  //     backgroundColor:'white',
  //     alignItems:'center',
  //     justifyContent:'center'
 
  // }


  itemContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10,
    marginTop:25,
    
  }
,
  image:{
    width:50,
    height:50,
    borderRadius:25
  },
  textName:{
    fontSize:17,
    marginLeft:10,
    fontWeight:'600'
  },
  textEmail:{
    fontSize:14,
    marginLeft:10,
    color:'grey'
  }
});
