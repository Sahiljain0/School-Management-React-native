import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Teacherside from "../TeacherSideComponent/Teacherside";
import AssignmentDownload from "../ParentSideComponent/AssignmentDownload";
import Navigation from "../Navigations/SubjectNavigation";
import StudentProfile from "../ParentSideComponent/MyChildProfile";
import DigiLocker from "../DigiLocker/Digilocker";
import EditProfile from "../profiles/EditableProfile";
import SettingPage from "../Settingspage/SettingPage";
import Complaintpage from "../ComplaintPage/ComplaintPage";
import SendNotificationPage from "../NotificationPages/SendNotificationPage";

const stack = createNativeStackNavigator();

const ChildHeader = () => {
  return (
   
      <stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "rgb(19 99 154)",
            
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "#fff",
        }}
      >
        <stack.Screen name="home" component={StudentProfile}  options={{headerShown:false}}/>
        <stack.Screen name="subject" component={Navigation} />
        <stack.Screen name="hom" component={Teacherside} />
        <stack.Screen name="download" component={AssignmentDownload} />
        <stack.Screen name="ChildInfo" component={Teacherside} />
        <stack.Screen name="Digilocker" component={DigiLocker} />
        <stack.Screen name="EditableProfile" component={EditProfile} />
        <stack.Screen name="account" component={EditProfile} />
        
        <stack.Screen name="StudentDigitallibrary" component={Navigation} />
       
        <stack.Screen name="Complaintpage" component={Complaintpage} />

      </stack.Navigator>
  
  );
};

export default ChildHeader;
