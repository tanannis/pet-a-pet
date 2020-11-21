import React from "react";
import { Button, Text, View } from "react-native";
import { dogs } from "../db";
import Swiper from "./Swiper";

const HomeScreen = ({ navigation }) => {

	return (
		<View>
			<Swiper navigation={navigation}/> 
		</View>
	);
};

export default HomeScreen;
