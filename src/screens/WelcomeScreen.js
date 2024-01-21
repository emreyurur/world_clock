// WelcomeScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('./path-to-your-image/welcome-image.png')}
        style={styles.image}
      /> */}
      <Text style={styles.title}>Welcome to World Clock App</Text>
      <Text style={styles.subtitle}>
        Explore and track different time zones around the world.
      </Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize:25,
    textAlign: 'center',
    marginTop:10,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
