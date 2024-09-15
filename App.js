import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View ,ScrollView,Button,Image} from 'react-native';
import New from './New';
import Radio from './Radio';
import CardComponent from './Card';
import Profile from './Profile';
import ProComponent from './ProComponent';
import Maincontent from './ParentSideComponent/ChildSubject';
import Carousel from './Slider/Slider';
import AssignmentDownload from './ParentSideComponent/AssignmentDownload';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Header from './Header/Header';
import Navigation from './Navigations/SubjectNavigation';
import StudentProfile from './ParentSideComponent/MyChildProfile';
import StudentDashboard from './Check-student-Info/StudentInformation';
import Teacherside from './TeacherSideComponent/Teacherside';

import HeaderNavigation from './Navigations/HeaderNavigation';
import BottomNavigation from './Navigations/FixedBottomNavigation';
import Bottomnav from './Navigations/FixedBottomNavigation';



import LoginScreen from './Startingcomponents/Loginpage';
import SignupScreen from './Startingcomponents/SignupPage';
import FirstPage from './Startingcomponents/FirstPageShow';
import SubjectHeader from './ParentSideComponent/SubjectScrollHeader';
import EntryNavigation from './Navigations/EntryNavigation';
import SearchBAR from './SearchFilter/SearchResult';

import DocumentPickerScreen from './Documnet';
import TeacherAtendence from './TeacherAddendence/TeachersAddemdence';
import Slist from './StudentAttendence/StudentList';
import TeacherMainSreen from './TeacherSideMainScreen/TeacherMainScreen';

import EditProfile from './profiles/EditableProfile';
import DigiLocker from './DigiLocker/Digilocker';
import EventFeeds from './EventFeeds/EventFeed';
import SearchLoadingAnimation from './PreLoaderAnimation/SearchLoadingAnimation';
import Loading from './PreLoaderAnimation/TeacherMainScreenLoadingAmination';
import TeacherMainScreenLoadingAmination from './PreLoaderAnimation/TeacherMainScreenLoadingAmination';
import Digitallocker from './Digitallocker';
import Newmodalcode from './Newmodalcode';
import MenuToggle from './MenuToggleIcons/MenuToggle';
import ModalTester from './Newmodalcode';
import SettingPage from './Settingspage/SettingPage';











export default function App() {


  return ( 
    // <View  style={{flex:1}}><Bottomnav/>
    
    
    //  </View>
    // this code is for fixed haeder and navigtion
  
//  <View style={{flex:1}}>
  
//   <Header/>
 
//  <Navigation/>
//  </View>
// yaha tak
// yaha entry naviagtion ka component  hai abhi ke liye hataya hai

<EntryNavigation/>


      

  );
}



