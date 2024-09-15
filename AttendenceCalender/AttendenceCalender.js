import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar } from 'react-native-calendars';

const Tab = createBottomTabNavigator();

const AttendanceCalender= () => {
  const [attendanceData, setAttendanceData] = useState({
    '2023-10-01': { marked: true, absent: true },
    '2023-10-05': { marked: true, absent: false },
    '2023-10-10': { marked: true, absent: true },
    // Add more attendance data as needed
  });

  // Calculate attendance percentage
  const totalDays = Object.keys(attendanceData).length;
  const absentDays = Object.values(attendanceData).filter((day) => day.absent).length;
  const attendancePercentage = ((totalDays - absentDays) / totalDays) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          current={'2023-10-01'}
          theme={{
            calendarBackground: 'white',
            selectedDayBackgroundColor: 'blue',
            selectedDayTextColor: 'white',
            todayTextColor: 'blue',
            dayTextColor: 'black',
          }}
          markedDates={attendanceData}
        />
      </View>
      <View style={styles.attendanceContainer}>
        <View style={styles.attendanceBox}>
          <View style={styles.greenBox}>
            <Text style={styles.attendanceText}>
              {attendancePercentage.toFixed(2)}%
            </Text>
          </View>
          <Text style={styles.attendanceLabel}>Attendance</Text>
        </View>
        <View style={styles.attendanceBox}>
          <View style={styles.redBox}>
            <Text style={styles.attendanceText}>
              {(100 - attendancePercentage).toFixed(2)}%
            </Text>
          </View>
          <Text style={styles.attendanceLabel}>Absent</Text>
        </View>
      </View>
    </View>
  );
};

const CelendarApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calendar" component={CalendarScreen}  />
        {/* Add other tabs/screens as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendarContainer: {
    flex: 3,
  },
  attendanceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  attendanceBox: {
    alignItems: 'center',
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBox: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  attendanceText: {
    color: 'white',
    fontSize: 20,
  },
  attendanceLabel: {
    marginTop: 10,
  },
});


export default AttendanceCalender;
