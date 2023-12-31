import React from "react";
import { StyleSheet } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TrackPlayer from "react-native-track-player";

import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen";
import LibraryScreen from "./src/screens/LibraryScreen";
import MusicPlayer from "./src/screens/NowPlayingScreen";

const Stack = createStackNavigator();



const App = () => {
  TrackPlayer.registerPlaybackService(() => require('./service'));

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Player" component={MusicPlayer} options={{headerShown: false}} />
        
        <Stack.Screen name="Library" component={LibraryScreen} options={{headerShown: false}} /> 
               
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;