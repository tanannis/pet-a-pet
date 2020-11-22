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
	ScrollView,
	ImageBackground,
} from "react-native";
import Constants from 'expo-constants'
import { dogs } from "../db"


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
						<View style={{flex: 1}} >
							<ImageBackground style={styles.image} source={dog.uri}> 
							<Text style={styles.nameText}>{dog.name}</Text>
							</ImageBackground>
							<SafeAreaView style={styles.container}>
							<ScrollView  style={styles.scrollView} >
							<Text style={styles.text}>My name is kobe, I'm a good body, I love mommy and daddy, want to be friends with me? message me below ^^</Text>
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
		marginTop: Constants.statusBarHeight
	},
	contentContainer: {
		flex: 1,
		paddingVertical: 20
	},
	scrollView:{
		// backgroundColor: 'pink',
		marginHorizontal: 20,
	},
	text: {
		fontSize: 18
	},
	nameText: {
		fontWeight: 'bold',
		color: 'blue',
		fontSize: 28
	}
	
});

export default SinglePet;
