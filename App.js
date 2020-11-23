import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import Swiper from "./components/Swiper";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SinglePet from "./components/SinglePet";

const Login = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'moccasin' }}>
			<Icon
				name="paw"
				size={180}
				color="chocolate"
				style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}
			></Icon>
			<Text style={styles.text}>Pet-A-Pet </Text>
			<Icon.Button title="Login" color='white' fontWeight='bold' onPress={() => navigation.navigate("Home")} solid> Login </Icon.Button>
		</View>
	);
};

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} options={{ title: "" }} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Swiper" component={Swiper} />
				<Stack.Screen name="SinglePet" component={SinglePet} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	text: {
		fontWeight: "bold",
		color: "black",
		fontSize: 40,
	},
})

export default App;
