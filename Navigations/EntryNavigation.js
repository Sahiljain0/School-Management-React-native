import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from '../Startingcomponents/FirstPageShow';
import LoginScreen from '../Startingcomponents/Loginpage';
import SignupScreen from '../Startingcomponents/SignupPage';
import BottomNavigation from './FixedBottomNavigation';
import Teacherside from '../TeacherSideComponent/Teacherside';
import ChildBottom from '../StudentNavigation/ChildPageBottom';



const Stack=createNativeStackNavigator();
const EntryNavigation = () => {
   
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name='FirstEntryPage'  component={FirstPage} options={{headerShown:false}} />
            <Stack.Screen name='Login'  component={LoginScreen}  />
            <Stack.Screen name='SignUp'  component={SignupScreen}  />
            <Stack.Screen name='Studentmain' options={{headerShown:false}}  component={ChildBottom} />
            <Stack.Screen name='Teachermain' options={{headerShown:false}}  component={BottomNavigation} />
        </Stack.Navigator>
    </NavigationContainer>
  
  )
}

export default EntryNavigation
