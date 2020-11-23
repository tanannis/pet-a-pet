import * as React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	SafeAreaView,
	TextInput,
	Alert,
	ScrollView,
	ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import { dogs } from "../data";
import Icon from "react-native-vector-icons/Fontisto";

class SinglePet extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	onPress = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		// console.log('PROP', this.props)
		// console.log('ID', this.props.route.params.dog.id)
		for (let i = 0; i < dogs.length; i++) {
			const dog = dogs[i];
			//if dog.id is the selected dog id
			if (dog.id === this.props.route.params.dog.id)
				return (
					<View style={{ flex: 1 }}>
						<ImageBackground style={styles.image} source={dog.uri}>
							<Text style={styles.nameText}>{dog.name}</Text>
						</ImageBackground>
						<Icon name="paw" size={30} color="#900" onPress={this.onPress}>
							<Text style={[styles.countText]}>
								PET ME : {this.state.count ? this.state.count : 0} times!{" "}
							</Text>
						</Icon>
						{/* <TouchableHighlight onPress={this.onPress}>
							<View style={styles.button}>
								<Text style={[styles.countText]}>PET ME : {this.state.count ? this.state.count : 0} times! </Text>
							</View>
						</TouchableHighlight> */}
						<SafeAreaView style={styles.container}>
							<ScrollView style={styles.scrollView}>
								<Text style={styles.text}>
									I'm a good boy, I love mommy and daddy, want to be friends
									with me? message me below ^^
								</Text>
							</ScrollView>
						</SafeAreaView>
					</View>
				);
		}
	}
}

const styles = StyleSheet.create({
	image: {
		flex: 2,
		height: null,
		width: null,
		resizeMode: "cover",
	},
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
	},
	contentContainer: {
		flex: 1,
		paddingVertical: 20,
	},
	scrollView: {
		// backgroundColor: 'pink',
		marginHorizontal: 20,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
	countText: {
		fontSize: 20,
		color: "#FF00FF",
	},
	text: {
		fontSize: 30,
	},
	nameText: {
		fontWeight: "bold",
		color: "blue",
		fontSize: 28,
	},
	input: {
		height: 30,
		width: null,
		borderColor: "grey",
		borderWidth: 1,
	},
});

export default SinglePet;
