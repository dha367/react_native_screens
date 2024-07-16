import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CustomButton from '../Componats/CoustomeButton';
import TextButton from '../Componats/TextButton';

const SignUp=({navigator})=>{
   
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
        const handleSignUp = () => {
          // Add sign-up logic here
          navigator.replace('Home'); // Navigate to Home after sign-up
        };
      
        return (
           
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.title}>My App</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#C0C0C0"
                    value={name}
                    onChangeText={setName}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#C0C0C0"
                    value={email}
                    onChangeText={setEmail}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#C0C0C0"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    />
                    
                    <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#C0C0C0"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    />
                </View>
                <View style={styles.buttonView}>
                    <View style={styles.carcters}>
                        <View style={styles.passView1}>
                            <View ><Text style={styles.password}>One lowercase character</Text></View>
                            <View style={styles.passwordView1}><Text  style={styles.password}>One uppercase character</Text></View>
                            <View  style={styles.passwordView1}><Text  style={styles.password}>One numberr</Text></View>
                            
                        </View>
                        <View style={styles.passView2}>
                          <View  style={styles.passwordView1}><Text  style={styles.password}>One lowercase character</Text></View>
                          <View  style={styles.passwordView1}><Text  style={styles.password}>8 characters minimum</Text></View>
                        </View>
                    </View>

                 <View style={styles.buttonviewCoustome}><CustomButton title={"Sign Up"} onPress={handleSignUp}/></View> 
                   <View style={styles.bootomText}>
                     <Text style={styles.frogetPassword}>Don’t have an account?  </Text>
                    <TextButton title={"Sign Up"} />
                    </View>
                </View>
            </View>

        
        );
    
}

const styles = StyleSheet.create({
    main:{
       flex:1,
       backgroundColor: '#2A2A2A'
    },
    container: {
     // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#2A2A2A',
    },
    title: {
      fontSize: 24,
      marginBottom: 50,
      color: '#fff',
    },
    input: {
      width: '97%',
      height: 70,
      borderColor: '#ccc',
      marginBottom: 20,
      borderRadius: 20,
      paddingLeft: 25,
      paddingBottom: 10,
      color: '#FFFFFF',
      backgroundColor: 'rgba(61,61,61,1)',
    },

    /// button view part and carcter view ..........
    buttonView:{
      display:'flex',
      flexDirection:'column'
    },
    carcters:{
      display:'flex',
      flexDirection:'row',
      paddingLeft:25,
      paddingBottom:10
    },
    password:{
       color:'#FFFFFF',
       fontSize:12
    },
    passView2:{
        paddingLeft:46
    },
    buttonviewCoustome:{
        paddingLeft:20,
        paddingTop:20
    },
    passwordView1:{
        paddingTop:2
    },
    bootomText:{
        paddingTop:'18%',
        justifyContent:'center',
        display:'flex',
        flexDirection:'row'
    },
    frogetPassword:{
        fontSize:14,
        color:'#fff',
        marginBottom:10,
        
      },
  });
export default SignUp;