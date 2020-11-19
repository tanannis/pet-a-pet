import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
	Image,
	Animated,
	PanResponder, //it is for card dragging and rotating
} from "react-native";

//For corss-device compatibility, we are getting the device width and height from an enviornment variable, which is dynamic and corresponds to the device's height and width. Use Dimension and store the values into two constants:
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

//create dummy data
export const dogs = [
	{ id: 1, uri: require("../assets/dogs/kobe.jpeg") },
	{ id: 2, uri: require("../assets/dogs/cody.jpg") },
	{ id: 3, uri: require("../assets/dogs/daisy.jpg") },
	{ id: 4, uri: require("../assets/dogs/jack.jpg") },
	{ id: 5, uri: require("../assets/dogs/kenny.jpg") },
	{ id: 6, uri: require("../assets/dogs/lucy.jpg") },
	{ id: 7, uri: require("../assets/dogs/max.jpg") },
	{ id: 8, uri: require("../assets/dogs/noodle.jpg") },
	{ id: 9, uri: require("../assets/dogs/nuggets.jpg") },
];

class Swiper extends React.Component {
	constructor() {
		super();
		//connect the gesture position to the Animated library by using Animated.ValueXY
		this.position = new Animated.ValueXY();
		this.state = {
			currentIndex: 0,
    };
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
			//event handler for the gesture of the release event handler
			onPanResponderRelease: (evt, gestureState) => {},
		});
  }

	render() {
		return dogs.map((dog, index) => {
			return (
				<Animated.View
        {...this.PanResponder.panHandlers}
					key={index}
					style={[
						{ transform: this.position.getTranslateTransform() },
						{
							height: SCREEN_HEIGHT - 120,
							width: SCREEN_WIDTH,
							padding: 10,
							position: "absolute",
						},
					]}
				>
					<Image
						style={{
							flex: 1,
							height: null,
							width: null,
							resizeMode: "cover",
							borderRadius: 20,
						}}
						source={dog.uri}
					/>
				</Animated.View>
			);
		});
	}
}

export default Swiper;
