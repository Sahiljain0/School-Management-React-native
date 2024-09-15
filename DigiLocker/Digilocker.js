import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/Ionicons";

const Digilocker = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [documentName, setDocumentName] = useState("");
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [viewDocumentModalVisible, setViewDocumentModalVisible] =
    useState(false);
  const [selectedImageURI, setSelectedImageURI] = useState(null);

  // Default images
  const defaultImages = [
    { name: "Aadhar card", uri: require("../assets/government.jpg") },
    { name: "PanCard", uri: require("../assets/government.jpg") },
    { name: "Passport", uri: require("../assets/government.jpg") },
    { name: "Voterid", uri: require("../assets/government.jpg") },
    { name: "Others", uri: require("../assets/government.jpg") },
  ];

  const saveDocument = () => {
    if (documentName && selectedDocument) {
      setDocuments([
        {
          name: documentName,
          file: selectedDocument,
        },
        ...documents,
      ]);
      setDocumentName("");
      setSelectedDocument(null);
      setModalVisible(false);
    }
  };

  const deleteDocument = (index) => {
    const updatedDocuments = [...documents];
    updatedDocuments.splice(index, 1);
    setDocuments(updatedDocuments);
  };

  const pickDocument = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        const { assets } = result;
        if (assets && assets.length > 0) {
          const selectedImage = assets[0];
          setSelectedDocument(selectedImage);
          setDocumentName(selectedImage.filename);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const openViewDocumentModal = (uri) => {
    setSelectedImageURI(uri);
    setViewDocumentModalVisible(true);
  };

  const findDefaultImage = (name) => {
    const formattedName = name.toLowerCase(); // Convert entered name to lowercase for case-insensitive comparison
    const defaultImage = defaultImages.find(
      (image) => image.name.toLowerCase() === formattedName
    );

    return defaultImage
      ? defaultImage.uri
      : defaultImages.find((image) => image.name === "Others").uri;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.documentContainer}>
        {documents.map((document, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => openViewDocumentModal(document.file.uri)}
          >
            <View style={styles.documentBox}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={findDefaultImage(document.name) || document.file.uri}
                  style={styles.documentImage}
                />
                <Text style={styles.documentName}>
                  {findDefaultImage(document.name) ? document.name : ""}
                </Text>
              </View>
              <TouchableOpacity onPress={() => deleteDocument(index)}>
                <Icon name="trash-bin" size={30} style={styles.deleteIcon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="add" size={30} style={styles.addIcon} />
        <Text style={styles.addText}>Add Documents</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalLabel}>Document Name:</Text>
            <TextInput
              style={styles.modalInput}
              value={documentName}
              onChangeText={(text) => setDocumentName(text)}
            />
            <Text style={styles.modalLabel}>Select Document:</Text>
            <TouchableOpacity style={styles.modalInput} onPress={pickDocument}>
              <Text>Select Image</Text>
            </TouchableOpacity>
            {selectedDocument && (
              <View>
                <Text style={styles.selectedDocumentName}>{documentName}</Text>
                <Image
                  source={{ uri: selectedDocument.uri }}
                  style={styles.selectedImage}
                />
              </View>
            )}
            <TouchableOpacity style={styles.saveButton} onPress={saveDocument}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={viewDocumentModalVisible}
      >
        <View style={styles.viewDocumentModalContainer}>
          <View style={styles.viewDocumentModalContent}>
            <Image
              source={{ uri: selectedImageURI }}
              style={styles.viewDocumentImage}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setViewDocumentModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
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
    backgroundColor: "#fff",
  },
  documentContainer: {
    paddingHorizontal: 20,
  },
  documentBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f2ecec",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    height: 100,
  },
  documentImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  documentName: {
    fontSize: 20,
    marginLeft: 30,
  },
  deleteIcon: {
    color: "#002667",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    
    backgroundColor: "#044664",
  },
  addIcon: {
    color: "white",
  },
  addText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#f4f3f3",
    borderRadius: 20,
    padding: 20,
  },
  modalLabel: {
    fontSize: 16,
  },
  modalInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  selectedDocumentName: {
    fontSize: 16,
    marginTop: 10,
  },
  selectedImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: "#044664",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  cancelButton: {
    backgroundColor: "#044664",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  viewDocumentModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#ffffff",
  },
  viewDocumentModalContent: {
    width: "90%",
    backgroundColor: "#f4f3f3",
    borderRadius: 20,
    padding: 20,
    height: 500,
  },
  viewDocumentImage: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  closeButton: {
    backgroundColor: "#044664",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Digilocker;