import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Title, Paragraph, Card, Divider } from 'react-native-paper';

const StudentInfoPage = () => {
  const studentData = {
    name: 'John Doe',
    email: 'john.doe2@example.com',
    image: 'https://placekitten.com/200/200', // Using a placeholder image
    attendance: false,
    address: '123 Main Street, City, Country',
    mobile: '123-456-7890',
    student_id: '2023001',
    dob: '1998-08-15T00:00:00.000Z',
    enrolledClass: '6553174035e7620521456736',
    parentNumber: '987-654-3210',
  };

  return (
    <ScrollView style={{ backgroundColor: '#f0f0f0', padding: 16 }}>
      <Card style={{ marginVertical: 16 }}>
        <Card.Cover source={{ uri: studentData.image }} />
        <Card.Content style={{ alignItems: 'center' }}>
          <Title style={{ marginBottom: 8 }}>{studentData.name}</Title>
          <Paragraph>{studentData.email}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={{ marginVertical: 16 }}>
        <Card.Content>
          <Title>Student Information</Title>
          <Divider style={{ marginVertical: 8 }} />
          <Paragraph>
            <Text>Email: {studentData.email}</Text>
          </Paragraph>
          <Paragraph>
            <Text>Student ID: {studentData.student_id}</Text>
          </Paragraph>
          <Paragraph>
            <Text>Date of Birth: {studentData.dob}</Text>
          </Paragraph>
          <Paragraph>
            <Text>Address: {studentData.address}</Text>
          </Paragraph>
          <Paragraph>
            <Text>Mobile: {studentData.mobile}</Text>
          </Paragraph>
          <Paragraph>
            <Text>Parent Number: {studentData.parentNumber}</Text>
          </Paragraph>
          <Paragraph>
            <Text>
              Enrolled Class: {studentData.enrolledClass}
            </Text>
          </Paragraph>
          <Paragraph>
            <Text>
              Attendance: {studentData.attendance ? 'Present' : 'Absent'}
            </Text>
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default StudentInfoPage;
