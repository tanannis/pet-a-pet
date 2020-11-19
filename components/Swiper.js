import "react-native-gesture-handler";
import * as React from "react";
import {dogs} from '../db'
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
    
    //Animated.Value method for dragging range
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2 ],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
    ...this.position.getTranslateTransform()
  ]
    }
  }

	render() {
		return dogs.map((dog, index) => {
      if (index < this.state.currentIndex){
        return null;
      } else if (index === this.state.currentIndex) {
			return (
				<Animated.View
        {...this.PanResponder.panHandlers}
					key={index}
					style={[
						this.rotateAndTranslate,
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
          } else {
            return (
              <Animated.View
                key={index}
                style={
                  {
                    height: SCREEN_HEIGHT - 120,
                    width: SCREEN_WIDTH,
                    padding: 10,
                    position: "absolute",
                  }
                }
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
          }
		}).reverse();
	}
}

export default Swiper;
