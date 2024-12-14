import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Screen width for responsive styling

export default function AddStudent() {
  
  const router = useRouter();
  
  
  const handlePress = () => {
    router.push('/(add_student)/add_Student_form');
  };
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Manage Students</Text>
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Add a Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log('Upload with Excel')}>
        <Text style={styles.buttonText}>Upload with Excel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05, // Responsive padding
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: width * 0.07, // Responsive font size
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: width * 0.04, // Responsive padding
    paddingHorizontal: width * 0.2,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.05, // Responsive font size
    fontWeight: 'bold',
  },
});
