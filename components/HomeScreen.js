import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "./Swiper";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<View style={{ flexDirection: "row" }}>
				<Icon
					name="star"
					size={40}
					color="red"
					style={{ paddingLeft: 20, paddingRight: 20 }}
				></Icon>
				<Icon
					name="comments"
					size={40}
					color="grey"
					style={{ paddingLeft: 50, paddingRight: 20 }}
				></Icon>
				<Icon
					name="heart"
					size={40}
					color="grey"
					style={{ paddingLeft: 50, paddingRight: 20 }}
				></Icon>
				<Icon
					name="user"
					size={40}
					color="grey"
					style={{ paddingLeft: 50, paddingRight: 20 }}
				></Icon>
			</View>

			<Swiper navigation={navigation} />

			<View style={{ flex: 1, flexDirection: "row" }}>
				<Icon
					name="undo"
					size={40}
					color="red"
					style={{ paddingLeft: 20, paddingRight: 20 }}
				></Icon>
				<Icon
					name="comments"
					size={40}
					color="grey"
					style={{ paddingLeft: 50, paddingRight: 20 }}
				></Icon>
				<Icon
					name="heart"
					size={40}
					color="grey"
					style={{ paddingLeft: 50, paddingRight: 20 }}
				></Icon>
				<Icon
					name="heart"
					size={40}
					color="grey"
					style={{ paddingLeft: 50, paddingRight: 20 }}
				></Icon>
			</View>
		</View>
	);
};

export default HomeScreen;
