import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { GiftedChat,Bubble } from 'react-native-gifted-chat';

const FeedbackChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  // Dummy list of teachers for feedback
  const teachers = [
    { id: 1, name: 'Teacher A' },
    { id: 2, name: 'Teacher B' },
    { id: 3, name: 'Teacher C' },
  ];

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Welcome to the Teacher Feedback Chatbot. Please select a teacher to provide feedback:',
        createdAt: new Date(),
        user: { _id: 2, name: 'Chatbot' },
      },
    ]);
  }, []);

  const handleSend = (newMessages = []) => {
    const userMessage = newMessages[0];

    if (!selectedTeacher) {
      // User is selecting a teacher
      const teacherName = userMessage.text.trim();
      const selectedTeacherData = teachers.find((teacher) =>
        teacher.name.toLowerCase() === teacherName.toLowerCase()
      );

      if (selectedTeacherData) {
        setSelectedTeacher(selectedTeacherData);
        const chatbotResponse = {
          _id: messages.length + 1,
          text: `You've selected ${selectedTeacherData.name}. Now, please provide feedback for this teacher.`,
          createdAt: new Date(),
          user: { _id: 2, name: 'Chatbot' },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [userMessage, chatbotResponse])
        );
      } else {
        const chatbotResponse = {
          _id: messages.length + 1,
          text: `Teacher not found. Please select a teacher from the list: ${teachers
            .map((teacher) => teacher.name)
            .join(', ')}`,
          createdAt: new Date(),
          user: { _id: 2, name: 'Chatbot' },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [userMessage, chatbotResponse])
        );
      }
    } else {
      // User is providing feedback for the selected teacher
      const chatbotResponse = {
        _id: messages.length + 1,
        text: `Thank you for your feedback for ${selectedTeacher.name}: "${userMessage.text}"`,
        createdAt: new Date(),
        user: { _id: 2, name: 'Chatbot' },
      };
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [userMessage, chatbotResponse])
      );
      setSelectedTeacher(null);
    }
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: { backgroundColor: '#EFEFEF' }, // User's messages
          right: { backgroundColor: '#007BFF' }, // Chatbot's messages
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => handleSend(newMessages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
      />
      {selectedTeacher && (
        <Text style={styles.selectedTeacherText}>
          Selected Teacher: {selectedTeacher.name}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedTeacherText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#007BFF',
    marginVertical: 10,
  },
});

export default FeedbackChatbot;
