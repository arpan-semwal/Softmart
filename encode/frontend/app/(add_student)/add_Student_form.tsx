import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Screen width for responsive styling

export default function AddStudentForm() {
  const [studentID, setStudentID] = useState('');
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [email, setEmail] = useState('');
  const [fatherPhoneNumber, setFatherPhoneNumber] = useState('');
  const [studentClass, setStudentClass] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log({ studentID, name, fatherName, email, fatherPhoneNumber, studentClass });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Student</Text>

      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentID}
        onChangeText={setStudentID}
      />

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Father's Name"
        value={fatherName}
        onChangeText={setFatherName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Father's Phone Number"
        value={fatherPhoneNumber}
        onChangeText={setFatherPhoneNumber}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Class"
        value={studentClass}
        onChangeText={setStudentClass}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05, // Responsive padding
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: width * 0.07, // Responsive font size
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
