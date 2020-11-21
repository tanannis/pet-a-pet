import "react-native-gesture-handler";
import * as React from "react";
import { dogs } from "../db";
import {
	StyleSheet,
	View,
	Text,
	Button,
	Dimensions,
	Image,
	Animated,
	PanResponder, //it is for card dragging and rotating
} from "react-native";


class Swiper extends React.Component {
	constructor() {
		super();
		//connect the gesture position to the Animated library by using Animated.ValueXY
		this.position = new Animated.ValueXY();
		this.state = {
			currentIndex: 0,
			selectedDog: {},
		};

		//Animated.Value method for dragging range
		this.rotate = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: ["-10deg", "0deg", "10deg"],
			extrapolate: "clamp",
		});
		//apply the transformations to the current card
		this.rotateAndTranslate = {
			transform: [
				{
					rotate: this.rotate,
				},
				...this.position.getTranslateTransform(),
			],
		};

		//next card opacity effect: fade-in and scale increase
		this.nextCardOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0, 1],
			extrapolate: "clamp",
		});
		this.nextCardScale = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0.8, 1],
			extrapolate: "clamp",
		});
		this.pickDog = this.pickDog.bind(this);
	}

	//create a PanResponder obj and assign it to the component & add below methods
	componentWillMount() {
		this.PanResponder = PanResponder.create({
			//for initializing
			onStartShouldSetPanResponder: (evt, gestureState) => true,

			//event handler for the moving gesture
			//assign the vector value: use setValue method and then get XY value from gestureState
			onPanResponderMove: (evt, gestureState) => {
				this.position.setValue({
					x: gestureState.dx,
					y: gestureState.dy,
				});
			},
			//event handler for the gesture of releasing a card
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx > 120) {
					Animated.spring(this.position, {
						toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
					}).start(() => {
						this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
							this.position.setValue({ x: 0, y: 0 });
						});
					});
				} else if (gestureState.dx < -120) {
					Animated.spring(this.position, {
						toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
					}).start(() => {
						this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
							this.position.setValue({ x: 0, y: 0 });
						});
					});
				} else {
					Animated.spring(this.position, {
						toValue: { x: 0, y: 0 },
						friction: 4,
					}).start();
				}
			},
		});
	}
	pickDog(id) {
		for (let i = 0; i < dogs.length; i++) {
			const dog = dogs[i];
			if (id === dog.id) {
				this.setState({ selectedDog });
			}
		}
		// fetch(`/db/index.js/${id}`)
	}

	renderDogs = () => {
		return dogs
			.map((dog, index) => {
				if (index < this.state.currentIndex) {
					return null;
				} else if (index === this.state.currentIndex) {
					return (
						<Animated.View
							{...this.PanResponder.panHandlers}
							key={index}
							style={[this.rotateAndTranslate, styles.screen]}
						>
							<Button
								title="SinglePet"
								// onPress={() => this.pickDog(id)}
								onPress={() => this.props.navigation.navigate("SinglePet")}
							></Button>
							<Image style={styles.image} source={dog.uri} name={dog.name} />
						</Animated.View>
					);
				} else {
					return (
						<Animated.View
							style={[
								{
									opacity: this.nextCardOpacity,
									transform: [{ scale: this.nextCardScale }],
									height: SCREEN_HEIGHT - 120,
									width: SCREEN_WIDTH,
									padding: 10,
									position: "absolute",
								},
							]}
						>
							<Image style={styles.image} source={dog.uri} />
						</Animated.View>
					);
				}
			})
			.reverse(); //reverse the stack so that the index 0/ the 1st card will be on top
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ height: 10 }}></View>
				<View style={{ flex: 1 }}>{this.renderDogs()}</View>
				<View style={{ height: 10 }}></View>
			</View>
		);
	}
}

//For corss-device compatibility, we are getting the device width and height from an enviornment variable, which is dynamic and corresponds to the device's height and width. Use Dimension and store the values into two constants:
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
	image: {
		flex: 1,
		height: null,
		width: null,
		resizeMode: "cover",
		borderRadius: 20,
	},
	screen: {
		height: SCREEN_HEIGHT - 120,
		width: SCREEN_WIDTH,
		padding: 10,
		position: "absolute",
	},
});

export default Swiper;
