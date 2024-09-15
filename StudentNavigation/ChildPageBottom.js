import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import AssignmentDownload from "../ParentSideComponent/AssignmentDownload";
import StudentProfile from "../ParentSideComponent/MyChildProfile";
import ChildHeader from "./ChildPageHeader";
import Navigation from "../Navigations/SubjectNavigation";
import SubjectHeader from "../ParentSideComponent/SubjectScrollHeader";
import Maincontent from "../ParentSideComponent/ChildSubject";
import { View,Text } from "react-native";
import CardComponent from "../Card";
import EditProfile from "../profiles/EditableProfile";
import EventFeeds from "../EventFeeds/EventFeed";
import MenuToggle from "../MenuToggleIcons/MenuToggle";
import HolidayPage from "../Holidays/Holiday";



// import HomeScreen from "./BottomNav/HomeScreen";
// import SearchScreen from "./BottomNav/SearchScreen";
// import MenuScreen from "./BottomNav/MenuScreen";

const Tab = createBottomTabNavigator();

function ChildBottom() {
  return (
    <NavigationContainer independent={true} >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Holiday") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "Menu") {
              iconName = focused ? "menu" : "menu-outline";
            }

            // code for new add
            else if (route.name === "Event") {
              iconName = focused ? "duplicate" : "duplicate-outline";
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
        <Tab.Screen name="Home" component={ChildHeader} options={{ headerShown: false }}/>
        <Tab.Screen name="Holiday" component={HolidayPage} options={{ headerShown: false }} />
        <Tab.Screen name="Event" component={EventFeeds} options={{ headerShown: false }} />
        <Tab.Screen name="Menu" component={MenuToggle}  options={{ headerShown: false }}  />
      </Tab.Navigator>
      </NavigationContainer>
  );
}


export default ChildBottom;