import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'
import Swiper from './components/Swiper'
import { Button, View, Text } from 'react-native'
import SinglePet from './components/SinglePet';
import { Provider } from 'react-redux';
import store from './redux/index'

const Login = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pet-A-Pet</Text>
      <Button
        title="Login"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
		<Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: '' }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Swiper" component={Swiper} />
        <Stack.Screen name='SinglePet' component={SinglePet} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
