import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View , Text, TextInput , StyleSheet, TouchableOpacity, Button , Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width} = Dimensions.get("window");


const Signup = () => {
	const router = useRouter();
  
	const [email, setEmail] = useState<string>("");
	const [schoolName, setSchoolName] = useState<string>("");
	const [schoolCity, setSchoolCity] = useState<string>("");
	const [schoolState, setSchoolState] = useState<string>("");
	const [schoolMobile, setSchoolMobile] = useState<string>("");
  
	const handleRegistration = async () => {
	  try {
		const response = await fetch("http://192.168.29.67:5000/register", {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify({ email, schoolName, schoolCity, schoolState, schoolMobile }),
		});
  
		if (!response.ok) {
		  throw new Error("Registration failed");
		}
  
		const data = await response.json();
		console.log("Registration successful:", data);
  
		// Store the token securely
		await AsyncStorage.setItem("token", data.token);
  
		// Navigate to the next page
		router.push("/(auth)/class_set");
	  } catch (error) {
		console.error("Error during registration:", error);
	  }
	};
  
	return (
	  <SafeAreaView style={styles.container}>
		<Text style={styles.title}>Register</Text>
		<View style={styles.formGroup}>
		  <Text style={styles.label}>Email</Text>
		  <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} />
  
		  <Text style={styles.label}>School Name</Text>
		  <TextInput style={styles.input} placeholder="Enter your school name" value={schoolName} onChangeText={setSchoolName} />
  
		  <Text style={styles.label}>School State</Text>
		  <TextInput style={styles.input} placeholder="Enter your school state" value={schoolState} onChangeText={setSchoolState} />
  
		  <Text style={styles.label}>School City</Text>
		  <TextInput style={styles.input} placeholder="Enter your school city" value={schoolCity} onChangeText={setSchoolCity} />
  
		  <Text style={styles.label}>Admin Phone Number</Text>
		  <TextInput style={styles.input} placeholder="Enter your admin phone number" value={schoolMobile} onChangeText={setSchoolMobile} />
		</View>
  
		<TouchableOpacity style={styles.button} onPress={handleRegistration}>
		  <Text style={styles.buttonText}>Submit</Text>
		</TouchableOpacity>
	  </SafeAreaView>
	);
  };


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  padding: 20,
	  backgroundColor: "#f5f5f5",
	  justifyContent: "center",
	},
	title: {
	  fontSize: 28,
	  fontWeight: "bold",
	  textAlign: "center",
	  marginBottom: 20,
	  color: "#333",
	},
	formGroup: {
	  marginBottom: 20,
	},
	label: {
	  fontSize: 16,
	  marginBottom: 5,
	  color: "#555",
	},
	input: {
	  borderWidth: 1,
	  borderColor: "#ccc",
	  paddingVertical: 12,
	  paddingHorizontal: 15,
	  borderRadius: 8,
	  fontSize: 16,
	  color: "#333",
	  marginBottom: 15,
	  backgroundColor: "#fff",
	},
	button: {
	  marginTop: 20,
	  backgroundColor: "#007bff",
	  paddingVertical: 12,
	  paddingHorizontal: 25,
	  borderRadius: 8,
	  alignItems: "center",
	  alignSelf: "center",
	  width: width * 0.8, // Responsive width
	},
	buttonText: {
	  fontSize: 18,
	  fontWeight: "bold",
	  color: "#fff",
	},
  });
  


export default Signup;