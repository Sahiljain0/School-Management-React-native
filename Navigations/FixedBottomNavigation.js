import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import AssignmentDownload from "../ParentSideComponent/AssignmentDownload";
import StudentProfile from "../ParentSideComponent/MyChildProfile";
import HeaderNavigation from "./HeaderNavigation";
import Navigation from "./SubjectNavigation";
import Testcode from "../ParentSideComponent/SubjectScrollHeader";
import Maincontent from "../ParentSideComponent/ChildSubject";
import FeedbackChatbot from "../FeedBack_Chatbot/FeedbackBot";
import SearchBAR from "../SearchFilter/SearchResult";
import StudentAttendenceList from "../StudentAttendence/StudentList";



// import HomeScreen from "./BottomNav/HomeScreen";
// import SearchScreen from "./BottomNav/SearchScreen";
// import MenuScreen from "./BottomNav/MenuScreen";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator


        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Attendence") {
              iconName = focused ? "menu" : "menu-outline";
              
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "gray",
          keyboardHidesTabBar: true
        }}
      >
        <Tab.Screen name="Home" component={HeaderNavigation} options={{ headerShown: false }}/>
        <Tab.Screen name="Search" component={SearchBAR} options={{ headerShown: false }}    />
        <Tab.Screen name="Attendence" component={StudentAttendenceList}  options={{ headerShown: false }} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}


export default BottomNavigation;