import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({});
  const [profileInfo, setProfileInfo] = useState([
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
  ]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Implement the logic to save the edited information
    // Update the profileInfo array with the new values.
    const updatedInfo = profileInfo.map((item) => {
      if (item.label === editedInfo.label) {
        return { ...item, value: editedInfo.value };
      }
      return item;
    });
    setProfileInfo(updatedInfo);
    setIsEditing(false);
  };

  const handleEditItem = (item, text) => {
    if (isEditing) {
      setEditedInfo({ label: item.label, value: text });
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/pic.jpg")} // Replace with your profile image
          style={styles.profileImage}
        />
        {isEditing ? (
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Icon name="checkmark-outline" size={30} style={styles.editIcon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Icon name="create-outline" size={30} style={styles.editIcon} />
          </TouchableOpacity>
        )}
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
                {isEditing ? (
                  <TextInput
                    style={styles.editInput}
                    value={
                      item.label === editedInfo.label
                        ? editedInfo.value
                        : item.value
                    }
                    onChangeText={(text) => handleEditItem(item, text)}
                  />
                ) : (
                  <Text style={styles.infoValue}>{item.value}</Text>
                )}
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
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: "white",
    borderWidth: 5,
  },
  saveButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "transparent",
  },
  editButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "transparent",
  },
  editIcon: {
    color: "white",
  },
  editInput: {
    fontSize: 16,
    color: "black",
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
});

export default EditProfile;