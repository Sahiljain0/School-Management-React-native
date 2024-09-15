import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Complaintpage = () => {
  const [complaintTypes] = useState([
    "Teacher behavior",
    "Course content",
    "Class timing",
    "Assignment quality",
    "Communication",
    "Other",
  ]);
  const [selectedComplaint, setSelectedComplaint] = useState("");
  const [userInput, setUserInput] = useState("");
  const [complaints, setComplaints] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isComplaintListVisible, setComplaintListVisible] = useState(false);
  const [teacherName, setTeacherName] = useState("");
  const [className, setClassName] = useState("");
  const [rotationColor, setRotationColor] = useState("#6bb9f0");

  const rotationRef = useRef(null);

  useEffect(() => {
    rotationRef.current = setInterval(() => {
      setRotationColor(generateRandomColor());
    }, 2000);

    return () => {
      clearInterval(rotationRef.current);
    };
  }, []);

  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const toggleModal = (complaintType) => {
    setSelectedComplaint(complaintType);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedComplaint("");
    setTeacherName("");
    setClassName("");
    setUserInput("");
  };

  const submitCustomComplaint = () => {
    if (
      userInput.trim() !== "" &&
      teacherName.trim() !== "" &&
      className.trim() !== ""
    ) {
      const newComplaint = {
        type: selectedComplaint || "Custom",
        teacher: teacherName,
        className: className,
        message: userInput,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
        }),
      };
      setComplaints([newComplaint, ...complaints]);
      setUserInput("");
      setTeacherName("");
      setClassName("");
      setModalVisible(false);
      setSelectedComplaint("");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setComplaintListVisible(true)}>
        <View style={styles.complaintIconContainer}>
          <AntDesign name="dingding" size={30} color={rotationColor} />
        </View>
      </TouchableOpacity>

      <View style={styles.complaintsList}>
        <Text style={styles.sectionTitle}>Select Complaint Type:</Text>
        {complaintTypes.map((type, index) => (
          <TouchableOpacity
            key={index}
            style={styles.complaintType}
            onPress={() => toggleModal(type)}
          >
            <Text style={styles.complaintText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => closeModal()}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedComplaint}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter teacher name"
              value={teacherName}
              onChangeText={setTeacherName}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter class name"
              value={className}
              onChangeText={setClassName}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your complaint"
              value={userInput}
              onChangeText={setUserInput}
              multiline={true}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={submitCustomComplaint}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={closeModal}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isComplaintListVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setComplaintListVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.complaintsModalContent}>
            <Text style={styles.modalTitle}>Submitted Complaints</Text>
            <ScrollView style={styles.complaintsScrollView}>
              {complaints.map((complaint, index) => (
                <View key={index} style={styles.individualComplaint}>
                  <Text style={styles.complaintDetail}>
                    Type: {complaint.type}
                  </Text>
                  <Text style={styles.complaintDetail}>
                    Teacher: {complaint.teacher}
                  </Text>
                  <Text style={styles.complaintDetail}>
                    Class: {complaint.className}
                  </Text>
                  <Text style={styles.complaintDetail}>
                    Message: {complaint.message}
                  </Text>
                  <Text style={styles.complaintDetail}>
                    Time: {complaint.time}
                  </Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setComplaintListVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#444",
  },
  complaintsList: {
    marginTop: 190,
    padding: 10,
  },
  complaintType: {
    padding: 18,
    borderRadius: 30,
    margin: 5,
    borderColor: "#0edec5",
    borderWidth: 2,
    backgroundColor: "#09a8b3",
  },
  complaintText: {
    alignSelf: "center",
    fontSize: 20,
    color: "#fffefe",
  },
  complaintIconContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6bb9f0",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    padding: 30,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#0d417d",
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  complaintsModalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    padding: 30,
    marginTop: 100,
    marginBottom: 50,
    marginLeft: "5%",
    marginRight: "5%",
    borderWidth: 3,
    borderColor: "#073d64",
  },
  complaintsScrollView: {
    maxHeight: 300,
    marginVertical: 10,
  },
  individualComplaint: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 30,
    marginBottom: 10,
    width: 240,
  },
  closeButton: {
    backgroundColor: "#073d6a",
    padding: 10,
    width: 100,
    borderRadius: 5,
  },
  complaintDetail: {
    marginBottom: 5,
  },
});

export default Complaintpage;