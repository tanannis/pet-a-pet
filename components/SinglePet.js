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
		this.state = {
			selectedDog: {},
		};
	}
	componentDidMount() {
		// this.props.getSinglePet(this.props.match.params.id;
	}

	pickDog(index) {
		if (i === index) {
			this.setState({ selectedDog });
		}
    }

	render() {
		// console.log('PROP', this.props)

		// const dog = (dogs, index) => {
			for (let i = 0; i < dogs.length; i++) {
                // if (i === index)
                const dog = dogs[i]
					return (
						<View>
							<Text>{dog.name}</Text>
							<Image source={dog.uri} />
						</View>
					);
			// }
		};
	}
}

export default SinglePet;
