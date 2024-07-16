import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TextButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical:1,
    paddingHorizontal:3,
   // borderRadius: 5,
  },
  buttonText: {
    color: 'rgba(255, 212, 130, 1)', // Text color
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TextButton;
