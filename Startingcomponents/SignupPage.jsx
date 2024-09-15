import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity, Button, StyleSheet, ImageBackground } from 'react-native';

const SignupScreen = (props) => {

 const [LoginIdentify,setLoginIdentify]=useState(props.route.params.loginPerson.person)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 

  const handleSignup = () => {
    
if(LoginIdentify==='Student'){
  props.navigation.navigate('Studentmain')
}
else if(LoginIdentify==='Teacher'){
  props.navigation.navigate('Teachermain')
}
else if(LoginIdentify==='Principle'){
  props.navigation.navigate('Teachermain')
}

    // Implement your user registration logic here
    // This can involve API requests or local storage

    // For this example, we'll simulate a successful registration
    console.log('Registered as:', username);
  };

  return (
    <ImageBackground
      source={{uri:'https://i.pinimg.com/736x/80/bc/b5/80bcb5ae5df313e634410f22153f10d8.jpg'}} // Use your own background image
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.title2}>Welcome to our app</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {/* <Button title="Sign Up" onPress={handleSignup} color="#007BFF" /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignup}
          activeOpacity={0.6}
        >
          <Text style={styles.titleText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    // alignItems: 'center',
    gap:10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  title2: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  input: {
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft:19,
    padding: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#007CFF',
    padding: 10,
    borderRadius: 8,
    // alignSelf:'center',
    alignItems:'center',
    width:'100%'
  },
  titleText: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 17,
    paddingHorizontal:88,
    paddingVertical:5
  },
});

export default SignupScreen;
