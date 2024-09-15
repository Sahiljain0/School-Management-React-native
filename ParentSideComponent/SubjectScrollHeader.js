import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Header/Header'
import Navigation from '../Navigations/SubjectNavigation'

const SubjectHeader = () => {
  
  return (
    <View style={{flex:1}}>
       <View
    style={styles.HeaderContainer}>
    
    </View>
      <Navigation />
      
    </View>
  )
}

export default SubjectHeader;
const styles = StyleSheet.create({
  HeaderContainer: {
      width: "100%",

      // mene height ko cahnge hai 170 se 100 par satck navigation ke liye
      height: 110,
      backgroundColor: "rgb(19 99 154)",
      borderBottomLeftRadius: 34,
      borderBottomRightRadius: 34,
    },
  

})

