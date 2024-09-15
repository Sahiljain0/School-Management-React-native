import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CompleteNavigation from '../ParentSideComponent/AllSubjects';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

const Navigation = (props) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarIndicator: () => null,
          tabBarStyle: {
            backgroundColor: 'white',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          indicatorStyle: {
            backgroundColor: 'blue',
            height: 4,
          },
          tabBarItemStyle: {
            marginVertical: 14,
            marginHorizontal: 10,
            borderRadius: 20,
            backgroundColor: 'rgb(66 157 127)',
            width: 'auto',
            alignItems: 'flex-start',
          },
          tabBarLabelStyle: {
            fontSize: 17,
            color: '#fff',
            textTransform: 'capitalize',
          },
        }}
      >
        <Tab.Screen name="main" component={CompleteNavigation} />
        <Tab.Screen name="science" component={Second} />
        <Tab.Screen name="math" component={Second} />
        <Tab.Screen name="drowing" component={Second} />
        <Tab.Screen name="physics" component={Second} />
        <Tab.Screen name="chemistry" component={Second} />
        <Tab.Screen name="biology" component={Second} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function Second() {
  return (
    <View>
      <TouchableOpacity onPress={() =>props.props.Navigation.navigate('download')}>
        <View style={styles.ChildItem}>
          <View style={styles.box}>
            <Icon name="book" size={35} color="rgb(222 250 255)" />
          </View>
          <View style={styles.description}>
            <View>
              <Text style={styles.uppertext}>Smart School</Text>
              <Text style={styles.lowertext}>
                Please upload PDF file only computer
              </Text>
            </View>
            <View>
              <Text>Due, 27 July 2026</Text>
            </View>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>14-6-2033</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgb(98 155 193)',
    width: 90,
    height: 80,
    marginVertical: 6,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 4,
  },
  ChildItem: {
    borderColor: 'darkgrey',
    borderWidth: 1,
    backgroundColor: 'rgb(220 220 220)',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 20,
    width: '97%',
    marginLeft: 5,
    marginVertical: 20,
  },
  description: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  dateContainer: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  date: {
    fontSize: 15,
    color: 'black',
  },
  uppertext: {
    fontSize: 17,
    fontWeight: '500',
  },
  lowertext: {
    fontSize: 13,
  },
});

export default Navigation;
