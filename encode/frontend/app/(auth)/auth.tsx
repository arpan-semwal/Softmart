import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from 'react-native-vector-icons';

const { width, height } = Dimensions.get("window");

const Auth = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Register as School Button */}
      <TouchableOpacity style={styles.button}>
        <Link href="/sign-up" style={styles.link}>
          <Text style={styles.buttonText}>Register as School</Text>
        
        </Link>
        <Ionicons name="arrow-forward" size={22} color="#fff" style={styles.arrow} />
      </TouchableOpacity>

      {/* Another Register Button */}
      <TouchableOpacity style={styles.button}>
        <Link href="/sign-up" style={styles.link}>
          <Text style={styles.buttonText}>Login as School</Text>
        
        </Link>
        <Ionicons name="arrow-forward" size={22} color="#fff" style={styles.arrow} />
      </TouchableOpacity>

      {/* Login as Student Button */}
      <TouchableOpacity style={styles.button}>
        <Link href="/sign-up" style={styles.link}>
          <Text style={styles.buttonText}>Login as a Student</Text>
         
        </Link>
        <Ionicons name="arrow-forward" size={24} color="#fff" style={styles.arrow} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: width * 0.05,
  },
  button: {
    width: "80%",
    marginVertical: height * 0.02, // Adds gap between buttons
    backgroundColor: "#007bff", // Blue background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: "row", // Align text and icon horizontally
    justifyContent: "space-between", // Space out text and icon
    alignItems: "center", // Center text and icon vertically
  },
  link: {
    flexDirection: "row", 
    justifyContent: "space-between", // Ensures space between text and arrow
    alignItems: "center",
    width: "100%", // Ensures link takes full width of button
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  
  arrow:{
    paddingRight:20
  }
  
});

export default Auth;
