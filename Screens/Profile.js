import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CustomButton from '../Componats/CoustomeButton';
import TextButton from '../Componats/TextButton';

const Profile=()=>{
    return(
      <View style={styles.view}>
        <Text>hi profile</Text>
        {/* <Text>new profile i am dhanusha deshanu</Text> */}
        {/* <View><Text>new wallent balance</Text></View> */}
      </View>
    );
}

const styles=StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:'#ffff'
  }
})

export default Profile;