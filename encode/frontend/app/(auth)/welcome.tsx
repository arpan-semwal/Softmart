import { useRouter } from "expo-router";
import React from "react";
import { View , Text, Button  , StyleSheet , Image, Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const {width , height} = Dimensions.get("window")


const Welcome = () => {
	
	const router = useRouter()
	 // eslint-disable-next-line no-unused-expressions
	 return(
		<SafeAreaView style={styles.container}>
			
			<Image source={require("../assests/encode-app-logo.png")} style={styles.logo}/>
			<View style ={styles.buttonContainer}>
			 	<Button title="Get Started" onPress={() =>  router.push("/auth")}/>
			</View>
		</SafeAreaView>
	 )
}
	 

const styles = StyleSheet.create({
	
	container:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#f5f5f5",
		paddingHorizontal: width * 0.05,
		
	},
	buttonContainer:{
		width:"80%",
		marginTop:height * 0.2,
		borderRadius:8,
		overflow:"hidden"
	},
	logo:{
		width:width*0.5,
		height:width*0.5,
		resizeMode:"contain"
	}
})

export default Welcome;