import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';


export default function Document() {
    const [selectedDocument, setSelectedDocument] = useState(null);
  
    const pickDocument = async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync();
        
       
  
     
          setSelectedDocument(result.assets[0]);
       
      } catch (err) {
        console.log(err);
      }
    };
  
    const renderSelectedDocument = () => {
      if (selectedDocument) {
        return (
          <View style={{marginTop:40,marginLeft:20,backgroundColor:'yellow',padding:20}}>
            <Text>Selected Document:</Text>
            <Text>Name: {selectedDocument.name}</Text>
            <Text>Size: {selectedDocument.size} bytes</Text>
            <Text>Name: {selectedDocument.mimeType}</Text>
          </View>
        );
      } else {
        return <Text>No document selected.</Text>;
      }
    };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Select Document" onPress={pickDocument} />
        {renderSelectedDocument()}
      </View>
    );
  }
  