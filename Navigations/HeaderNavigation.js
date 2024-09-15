import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Teacherside from "../TeacherSideComponent/Teacherside";
import AssignmentDownload from "../ParentSideComponent/AssignmentDownload";
import Navigation from "./SubjectNavigation";
import UserDetails from "../Check-student-Info/StudentInformation";
import TeacherMainSreen from "../TeacherSideMainScreen/TeacherMainScreen";
import SubjectHeader from "../ParentSideComponent/SubjectScrollHeader";
import EventFeeds from "../EventFeeds/EventFeed";
import SendNotificationPage from "../NotificationPages/SendNotificationPage";
import SettingPage from "../Settingspage/SettingPage";

const stack = createNativeStackNavigator();

const HeaderNavigation = () => {
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
      <stack.Screen name="home" component={TeacherMainSreen} options={{ headerShown: false }} />
      <stack.Screen name="subject" component={SubjectHeader} />
      <stack.Screen name="hom" component={Teacherside} />
      <stack.Screen name="download" component={AssignmentDownload} />
      <stack.Screen name="studentINFO" component={UserDetails} options={{ headerShown: true, title: 'Details' }} />
      <stack.Screen name="Eventfeed" component={EventFeeds} />
      <stack.Screen name="SendNotificationPage" component={SendNotificationPage} options={{ headerShown: false }} />



    </stack.Navigator>

  );
};

export default HeaderNavigation;
