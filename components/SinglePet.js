import * as React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	Image,
} from "react-native";
import Constants from "expo-constants";
import { dogs } from "../data";
import Icon from "react-native-vector-icons/FontAwesome";

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
		for (let i = 0; i < dogs.length; i++) {
			const dog = dogs[i];
			//if dog.id is the selected dog id
			if (dog.id === this.props.route.params.dog.id)
				return (
					<View style={{ flex: 1 }}>
						<Image style={styles.image} source={dog.uri} />
						<Icon
							name="paw"
							size={40}
							color="chocolate"
							onPress={this.onPress}
							style={{ paddingLeft: 15 }}
						>
							<Text style={styles.countText}>
								&nbsp; PET ME : {this.state.count ? this.state.count : 0} times!
							</Text>
						</Icon>

						<SafeAreaView style={styles.container}>
							<ScrollView style={styles.scrollView}>
								<Text style={styles.nameText}>{dog.name}</Text>
								<Text style={styles.text}>
									{dog.about} &nbsp;
									<Icon name="comment" size={40} color="royalblue"></Icon>
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
		flex: 4,
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
		marginHorizontal: 20,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
	countText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "chocolate",
	},
	text: {
		fontSize: 25,
	},
	nameText: {
		fontWeight: "bold",
		color: "black",
		fontSize: 40,
	},
});

export default SinglePet;
