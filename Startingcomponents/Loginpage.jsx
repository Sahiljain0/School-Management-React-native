import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native';
import axios from 'axios'

const LoginScreen = (props) => {
  

const [loginPerson,setLoginPerson]=useState(props.route.params)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  


  const handleLogin = async() => {
    
    props.navigation.navigate('SignUp' ,{loginPerson})
    if(LoginIdentify==='Student'){
      props.navigation.navigate('Studentmain')
    }
    else if(LoginIdentify==='Teacher'){
      props.navigation.navigate('Teachermain')
    }
    else if(LoginIdentify==='Principle'){
      props.navigation.navigate('Teachermain')
    }

    try{

      const res = axios.post('http://192.168.129.69:5000/api/v1/login',{
        email:username,password:password
      })
    }catch(err){
      console.log(err)
    }
    
    console.log('Logged in as:', username);
  };

  return (
    <ImageBackground
      source={{uri:'https://i.pinimg.com/736x/80/bc/b5/80bcb5ae5df313e634410f22153f10d8.jpg'}} // Use your own background image
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Let's Sign In</Text>
        <Text style={styles.title2}>{`Welcome Back,
Your are Being miss`}</Text>
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
        {/* <Button title="Login" onPress={handleLogin} color="#007BFF" titleStyle={styles.titleText} /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          activeOpacity={0.6}
        >
          <Text style={styles.titleText}>Sign In</Text>
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
    gap:20,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255,255, 0.1)',
    borderRadius: 5,
    padding: 20,
    width: '90%',
    // alignItems: 'start',
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
    marginBottom: 16,
    padding: 10,
    paddingLeft:16,
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

export default LoginScreen;
