import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const SendNotificationPage = () => {
  const [notification, setNotification] = useState('');
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', details: 'Details of User 1' },
    { id: 2, name: 'User 2', details: 'Details of User 2' },
    { id: 3, name: 'User 3', details: 'Details of User 3' },
    // Add more users as needed
  ]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(1);

  const handleNotificationChange = (text) => {
    setNotification(text);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleUserSelection = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleSendNotification = () => {
    const currentTime = new Date().toLocaleString();
    const newNotification = {
      id: notificationCount,
      text: notification,
      time: currentTime,
      recipients: selectedUsers,
    };

    setNotifications([newNotification, ...notifications]);
    setNotificationCount(notificationCount + 1);

    // Clear input fields and selections
    setNotification('');
    setSelectedUsers([]);
  };

  // Filter users based on search text
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send a Notification</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your notification here"
        multiline
        numberOfLines={4}
        value={notification}
        onChangeText={handleNotificationChange}
      />
      <Button
        title="Send Notification"
        onPress={handleSendNotification}
      />
      <Text style={styles.title}>Select Recipients</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search users"
        value={searchText}
        onChangeText={handleSearchChange}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <UserSelection
            user={item}
            selected={selectedUsers.includes(item.id)}
            onSelect={handleUserSelection}
          />
        )}
      />
      <Text style={styles.title}>Previous Notifications</Text>
      <FlatList data={notifications} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <NotificationCard notification={item} />} />
    </View>
  );
};

const UserSelection = ({ user, selected, onSelect }) => (
  <TouchableOpacity onPress={() => onSelect(user.id)}>
    <View style={selected ? styles.selectedUser : styles.user}>
      <Text style={styles.userName}>{user.name}</Text>
    </View>
  </TouchableOpacity>
);

const NotificationCard = ({ notification }) => (
  <View style={styles.notificationCard}>
    <Text>{notification.time}</Text>
    <Text>{notification.text}</Text>
    <Text>{`Recipients: ${notification.recipients.join(', ')}`}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  user: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    padding: 16,
    borderRadius: 10,
  },
  selectedUser: {
    backgroundColor: '#007BFF',
    marginBottom: 10,
    padding: 16,
    borderRadius: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationCard: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default SendNotificationPage;
