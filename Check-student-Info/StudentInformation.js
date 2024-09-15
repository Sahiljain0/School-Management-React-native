import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserDetails = ({route}) => {
  // const user = {
  //   name: 'Anuj Sahu',
  //   phoneNumber: '8319363714',
  //   dateOfBirth: 'January 27, 2004',
  //   email: 'sahuanuj4455@gamil.com',
  //   profileImage: require('../assets/pic.jpg'),
  // };
  const {item}= route.params;
  const user = item;
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const togglePhoneNumber = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={user.image} style={styles.profileImage} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.detail}>{user.name}</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.detail}>{user.dob}</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.detail}>{user.email}</Text>
        </View>
        {showPhoneNumber && (
          <View style={styles.detailBox}>
            <Text style={styles.label}>Phone Number:</Text>
            <Text style={styles.detail}>{user.mobile}</Text>
          </View>
        )}
        <TouchableOpacity onPress={togglePhoneNumber} style={styles.button}>
          <Text style={styles.buttonText}>
            {showPhoneNumber ? 'Hide Phone Number' : 'Show Phone Number'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(221 221 221)',
  },
  profileContainer: {
    marginBottom: 20,
 
    padding: 10,
    borderRadius: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  detailsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  detailBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  detail: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default UserDetails;
