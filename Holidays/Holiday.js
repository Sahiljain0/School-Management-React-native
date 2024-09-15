import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar } from 'react-native-calendars';

const Tab = createBottomTabNavigator();

const HolidayPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [showHolidayDetails, setShowHolidayDetails] = useState(false);

  // Sample holiday data
  const holidayData = {
    '2023-10-02': { dots: [ { key: 'holiday', color: 'red' } ],
                     selected: true, selectedColor: 'red' },
    '2023-10-11': { dots: [ { key: 'holiday', color: 'red' } ],
            selected: true, selectedColor: 'red' }, 
         };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    if (holidayData[day.dateString]) {
      setShowHolidayDetails(true);
    } else {
      setShowHolidayDetails(false);
    }
  };

  const getHolidaysForCurrentMonth = () => {
    const currentMonth = '2023-10'; // Change this to the desired month
    const holidays = Object.entries(holidayData)
      .filter(([date]) => date.startsWith(currentMonth))
      .map(([date, data]) => ({ date, ...data }));
    return holidays;
  };

  const holidaysForCurrentMonth = getHolidaysForCurrentMonth();

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          current={'2023-10-01'}
          theme={{
            calendarBackground: 'white',
            todayTextColor: 'blue',
            dayTextColor: 'black',
          }}
          markedDates={holidayData}
          onDayPress={onDayPress}
        />
      </View>
      {showHolidayDetails && (
        <ScrollView style={styles.holidayDetailsContainer}>
          <Text style={styles.holidayDetailsText}>
            {holidayData[selectedDate].dots[0].key}
          </Text>
        </ScrollView>
      )}
      {holidaysForCurrentMonth.length > 0 && (
        <ScrollView style={styles.holidayListContainer}>
          <Text style={styles.holidayListHeader}>Holidays in October 2023:</Text>
          {holidaysForCurrentMonth.map((holiday) => (
            <TouchableOpacity
              key={holiday.date}
              style={styles.holidayCard}
              onPress={() => console.log("Tapped on " + holiday.date)}
            >
              <Text style={styles.holidayCardDate}>{holiday.date}</Text>
              <Text style={styles.holidayCardName}>{holiday.dots[0].key}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const Holiday = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calendar" component={CalendarScreen} />
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
  holidayDetailsContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  holidayDetailsText: {
    fontSize: 18,
    padding: 20,
  },
  holidayListContainer: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    paddingHorizontal: 10,
  },
  holidayListHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
  },
  holidayCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  holidayCardDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  holidayCardName: {
    fontSize: 14,
  },
});


export default HolidayPage;
