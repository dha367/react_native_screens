import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CustomButton from '../Componats/CoustomeButton';
import TextButton from '../Componats/TextButton';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here
    navigation.replace('Home');
  };

  const navigateToSignUpPage=()=>{
    navigation.replace("SignUp")
  }

  return (
    <View style={styles.main}>
         <View style={styles.container}>
      <Text style={styles.title}>My app</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#C0C0C0"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#C0C0C0"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.textContent}><Text style={styles.frogetPassword}>Forgot Password ? </Text></View>
      <CustomButton title="Sign In" onPress={ handleLogin}/>
      <View style={styles.spacer} />
    </View>
        <View style={styles.textContent2}>
            <Text style={styles.frogetPassword}>Don’t have an account?  </Text>
            <TextButton title={"Sign Up"} onPress={navigateToSignUpPage}/>
        </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
main:{
    flex:1,
    backgroundColor:'#2A2A2A'
},   
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#2A2A2A',
    marginTop:'50%'
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
    color:'#ffff',
    
  },
  input: {
    width: '97%',
    height: 70,
    borderColor: '#ccc',
   // borderWidth: 1,
    marginBottom: 20,
    ///paddingHorizontal: 10,
    borderRadius:20,
    paddingLeft:25,
    paddingBottom:10,
    color:'#FFFFFF',
    backgroundColor:'rgba(61,61,61,1)'
    
  },
  frogetPassword:{
    fontSize:14,
    color:'#fff',
    marginBottom:10,
    
  },
  textContent:{
    paddingLeft:'60%'
  },
  textContent2:{
    justifyContent:'center',
    display:'flex',
    flexDirection:'row',
    paddingTop:'10%',
    marginTop:'37%',
    backgroundColor:"#2A2A2A"
    
  },
 
});

export default LoginScreen;
