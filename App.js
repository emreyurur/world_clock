import React from "react";
import { SafeAreaView,View,Text,StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Madrid from './src/screens/MadridScreen';
import MadridScreen from "./src/screens/MadridScreen";
import CairoScreen from "./src/screens/CairoScreen";


const Stack=createNativeStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="MadridScreen" component={MadridScreen}/>
        <Stack.Screen name="CairoScreen" component={CairoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
