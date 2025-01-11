import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [schoolState, setSchoolState] = useState("");
  const [schoolMobile, setSchoolMobile] = useState("");

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
    <LinearGradient colors={["#FFFFFF", "#CAF0F8", "#6EC1E4", "#48CAE4"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.innerContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Register</Text>

            <View style={styles.formGroup}>
             

              <Text style={styles.label}>School Name</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="school" size={20} color="#555" style={styles.inputIcon} />
                <TextInput style={styles.input} placeholder="Enter your school name" value={schoolName} onChangeText={setSchoolName} />
						  </View>
				 <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="mail" size={20} color="#555" style={styles.inputIcon} />
                <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} />
              </View>		  

						  <Text style={styles.label}>Admin Phone Number</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="call" size={20} color="#555" style={styles.inputIcon} />
                <TextInput style={styles.input} placeholder="Enter your admin phone number" value={schoolMobile} onChangeText={setSchoolMobile} />
              </View>
              <Text style={styles.label}>School State</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="location" size={20} color="#555" style={styles.inputIcon} />
                <TextInput style={styles.input} placeholder="Enter your school state" value={schoolState} onChangeText={setSchoolState} />
              </View>

              <Text style={styles.label}>School City</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="location" size={20} color="#555" style={styles.inputIcon} />
                <TextInput style={styles.input} placeholder="Enter your school city" value={schoolCity} onChangeText={setSchoolCity} />
              </View>

						  
						  
              
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  formGroup: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    elevation: 2,
  },
  inputIcon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  button: {
    marginTop: 20,
    borderRadius: 10,
    alignSelf: "center",
    width: width * 0.8,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#023E84",
    elevation: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Signup;
