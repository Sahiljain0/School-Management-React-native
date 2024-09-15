

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

const StudentAttendence = ({ students, markAttendance }) => {
  const [sortBy, setSortBy] = useState('name'); // Default sorting by name
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order ascending
  const [filterAttendance, setFilterAttendance] = useState('all'); // Filter by attendance: 'all', 'present', 'absent'

  const sortStudents = (students) => {
    const sortedStudents = [...students].sort((a, b) => {
      let result = 0;

      if (sortBy === 'student_name') {
        result = a.student_name.localeCompare(b.student_name);
      } else if (sortBy === 'enrollmentNumber') {
        result = a.enrollmentNumber - b.enrollmentNumber;
      } else if (sortBy === 'gender') {
        result = a.gender.localeCompare(b.gender);
      } else if (sortBy === 'dateOfBirth') {
        result = a.dateOfBirth.localeCompare(b.dateOfBirth);
      } else if (sortBy === 'attendance') {
        const attendanceA = a.attendance ? 1 : 0;
        const attendanceB = b.attendance ? 1 : 0;
        result = attendanceA - attendanceB;
      }

      // Toggle the result based on sortOrder
      return sortOrder === 'asc' ? result : -result;
    });

    return sortedStudents;
  };
  console.log(students)
  const filteredStudents = students.filter((student) => {
    if (filterAttendance === 'all') {
      return true;
    } else if (filterAttendance === 'present') {
      return student.attendance;
    } else if (filterAttendance === 'absent') {
      return !student.attendance;
    }
    return true;
  });

  const sortedAndFilteredStudents = sortStudents(filteredStudents);

  // Function to toggle sorting order when clicking on the same sorting option
  const toggleSortingOrder = (newSortBy) => {
    if (newSortBy === sortBy) {
      // Clicking on the same sorting option, toggle the sortOrder
      setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      // Clicking on a different sorting option, set sortOrder to 'asc'
      setSortOrder('asc');
    }
    setSortBy(newSortBy);
  };

  // Function to toggle filter options
  const toggleFilterOption = (newFilterOption) => {
    setFilterAttendance(newFilterOption);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: '#224f76',
          position: 'absolute',
          top: 0,
          width: '100%',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          padding: 35,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 10, textAlign: 'center' }}>
          Attendance
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          {/* Sorting Options */}
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: sortBy === 'name' ? '#008000' : '#224f76',
              borderRadius: 5,
            }}
            onPress={() => toggleSortingOrder('name')}
          >
            <Text style={{ color: 'white' }}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: sortBy === 'enrollmentNumber' ? '#008000' : '#224f76',
              borderRadius: 5,
            }}
            onPress={() => toggleSortingOrder('enrollmentNumber')}
          >
            <Text style={{ color: 'white' }}>Enrollment Number</Text>
          </TouchableOpacity>
          {/* Filter Options */}
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: filterAttendance === 'all' ? '#008000' : '#224f76',
              borderRadius: 5,
            }}
            onPress={() => toggleFilterOption('all')}
          >
            <Text style={{ color: 'white' }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: filterAttendance === 'present' ? '#008000' : '#224f76',
              borderRadius: 5,
            }}
            onPress={() => toggleFilterOption('present')}
          >
            <Text style={{ color: 'white' }}>Present</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: filterAttendance === 'absent' ? '#008000' : '#224f76',
              borderRadius: 5,
            }}
            onPress={() => toggleFilterOption('absent')}
          >
            <Text style={{ color: 'white' }}>Absent</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{marginTop:155}}
        data={sortedAndFilteredStudents}
        keyExtractor={(student) => student.student_id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
              marginHorizontal: 10,
              padding: 10,
              borderRadius: 10,
              backgroundColor: item.attendance ? '#00FF00' : '#FF0000'
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center',width:'70%'}}>
              <Image
                source={{uri:'https://media.istockphoto.com/id/1179017978/photo/one-female-student.jpg?s=612x612&w=0&k=20&c=dJR56PiVUcd0hoJoSXtAJ3lw_P_pyVVSfLMNzwHvw0k='}}
                style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }}
              />
              <View>


                {/* change kiyaa he */}
                <Text style={{ fontWeight: 'bold', color: 'indigo' }}>{item.name}</Text>
                <Text style={{ color: 'gray', fontSize: 12 }}>Enroll : {item.student_id}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => markAttendance(item.student_id)}
              style={{
                backgroundColor: item.attendance ? '#008000' : '#BB0000',
                padding: 10,
                borderRadius: 5,
                width:'30%',
                flexDirection: 'row',
              justifyContent: 'center'
              }}
            >
              <Text style={{ color: 'white',}}>{item.attendance ? 'Present' : 'Absent'}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default StudentAttendence;
