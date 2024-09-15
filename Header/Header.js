import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View
    style={styles.HeaderContainer}>
    
    </View>
  )
}
const styles = StyleSheet.create({
    HeaderContainer: {
        width: "100%",

        // mene height ko cahnge hai 170 se 100 par satck navigation ke liye
        height: 100,
        backgroundColor: "rgb(19 99 154)",
        borderBottomLeftRadius: 34,
        borderBottomRightRadius: 34,
      },
    

})

export default Header

