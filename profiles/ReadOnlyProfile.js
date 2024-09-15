import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {


  const profileInfo = [
    {
      label: "Username",
      value: "JohnDoe123",
      icon: "person-circle-outline",
    },
    {
      label: "Password",
      value: "****",
      icon: "lock-closed-outline",
    },
    {
      label: "Email",
      value: "john.doe@email.com",
      icon: "mail-outline",
    },
    {
      label: "Class",
      value: "10th Grade",
      icon: "school-outline",
    },
    {
      label: "Date of Birth",
      value: "01/01/2000",
      icon: "calendar-outline",
    },
    {
      label: "Father's Name",
      value: "John Doe Sr.",
      icon: "person-outline",
    },
    {
      label: "Mother's Name",
      value: "Jane Doe",
      icon: "person-outline",
    },
    {
      label: "Location",
      value: "City, Country",
      icon: "location-outline",
    },
    {
      label: "Height",
      value: "5'9\"",
      icon: "body-outline",
    },
    {
      label: "Weight",
      value: "150 lbs",
      icon: "barbell-outline",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/student.png")} // Replace with your profile image
          style={styles.profileImage}
        />
      </View>

      {/* Profile Information */}
      <View style={styles.profileInfoWrapper}>
        <View style={styles.profileInfo}>
          {profileInfo.map((item, index) => (
            <View key={index} style={styles.profileInfoItem}>
              <View style={styles.iconContainer}>
                <View style={styles.iconCircle}>
                  <Icon name={item.icon} size={40} style={styles.icon} />
                </View>
              </View>
              <View style={styles.labelValueContainer}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.infoValue}>{item.value}</Text>
              </View>
              <View style={styles.moreIconContainer}>
                <Icon
                  name="chevron-forward"
                  size={24}
                  style={styles.moreIcon}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#dfdfdf",
    backgroundColor: "#044664",
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "transparent",
    height: 200,
    marginBottom: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // backgroundColor: "#044664",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: "white",
    borderWidth: 5,
    // marginTop:5,
  },
  profileInfoWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  profileInfo: {
    width: "95%",
    backgroundColor: "rgba(128, 128, 128, 0.1)",
    borderColor: "white",
    borderWidth: 6,
    marginTop: -80,
    borderRadius: 20,
    marginBottom: 20,
  },
  profileInfoItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: "20%",
    marginLeft: 8,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#0d7785",
    fontSize: 32,
  },
  labelValueContainer: {
    marginLeft: 15,
    width: "60%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  infoValue: {
    fontSize: 16,
    color: "white",
  },
  moreIconContainer: {
    width: "10%",
  },
  moreIcon: {
    color: "#d5ddde",
  },
});

export default ProfileScreen;