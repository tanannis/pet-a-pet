// import React from "react";
// import {
// 	StyleSheet,
// 	Text,
// 	View,
// 	Button,
// 	SafeAreaView,
// 	Image,
// 	TextInput,
// 	Alert,
// } from "react-native";

// export default function App() {
// 	const [count, setCount] = React.useState(0);
// 	const [value, onChange] = React.useState(null);

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			  
// 			<View>
// 				    
// 				<Text style={styles.baseText}>
// 					My Name is           
// 					<Text style={styles.innerText}> Kobe ^^ </Text>
// 				</Text>
// 				 
// 				<Image
// 					source={require("./public/kobe.jpeg")}
// 					style={{ width: 200, height: 200 }}
// 				/>
// 				  
// 				<Button
// 					onPress={() => setCount(count + 1)}
// 					title={`${count} Likes!`}
// 				></Button>

// 			</View>

// 			<Text style={styles.message}> Message Me! </Text>

// 			<TextInput
// 				style={{ height: 30, width: 200, borderColor: "grey", borderWidth: 1 }}
// 				placeholder="Type here!"
// 				onChange={(text) => onChange(text)}
// 				defaultValue={value}
// 			></TextInput>

// 			<Button
// 				title="Send Message"
// 				onPress={() => Alert.alert("Your message is sent!")}
// 			></Button>
// 		</SafeAreaView>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	innerText: {
// 		color: "blue",
// 		fontWeight: "bold",
// 		fontSize: 20,
// 	},
// 	baseText: {
// 		color: "red",
// 		fontWeight: "bold",
// 		fontSize: 15,
// 	},
// 	message: {
// 		color: "black",
// 		fontSize: 15,
// 	},
// });
