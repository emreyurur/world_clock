import React from "react";
import { SafeAreaView,View,Text,StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';


const Stack=createNativeStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
