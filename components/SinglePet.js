import * as React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	Image,
	TextInput,
	Alert,
} from "react-native";
import { dogs } from "../db";

//render the info of a single pet
//dogs = [{..},{..},{..}]
class SinglePet extends React.Component {
	constructor() {
		super();
	}

	render() {
		// console.log('PROP', this.props)
		// console.log('ID', this.props.route.params.dog.id)
		for (let i = 0; i < dogs.length; i++) {
			const dog = dogs[i];
			//if dog.id is the selected dog id
			if (dog.id === this.props.route.params.dog.id)
				return (
					<View style={styles.image}>
						<Text>{dog.name}</Text>
						<Image style={styles.image} source={dog.uri} />
					</View>
				);
		}
	}
}

const styles = StyleSheet.create({
	image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'contain',
	},
});

export default SinglePet;
