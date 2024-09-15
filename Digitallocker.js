import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Modal, TouchableWithoutFeedback, ScrollView ,Text ,TouchableHighlight,TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ProComponent from './ProComponent';


export default function Digitallocker() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access the camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setSelectedImages([...selectedImages, result.uri]);
    }
  };

  const openImageInModal = (index) => {
    setCurrentImageIndex(index);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {selectedImages.map((image, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => openImageInModal(index)}>
            <View style={styles.imageContainer}>
              {/* <Image source={{ uri: image }} style={styles.image} /> */}
              <ProComponent/>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
      <TouchableOpacity
          style={styles.button}
          onPress={openImagePickerAsync}
          activeOpacity={0.6}
        >
          <Text style={styles.titleText}>Add Document</Text>
        </TouchableOpacity>
      <View >
      <Modal animationType="slide" transparent={false} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={closeImageModal}>
            <View style={styles.modalInner}>
              <Image source={{ uri: selectedImages[currentImageIndex] }} style={styles.modalImage} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
  
  },
  imageContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 300,
    height: 200,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:30,
  
   
    backgroundColor:'white',
    
   
  },
  modalInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  modalImage: {
    width:300,
    height:220,
  },

  button: {
    backgroundColor: 'skyblue',
    padding: 20,
    borderRadius: 28,
    // alignSelf:'center',
    alignItems:'center',
    width:'50%',
    marginBottom:35
  },
});
