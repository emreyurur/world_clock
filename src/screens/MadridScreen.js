// MadridScreen.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import CountryScreen from '../components/CountryScreen';

const image = { uri: 'https://images.pexels.com/photos/3254729/pexels-photo-3254729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' };

const MadridScreen = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
      <View style={styles.container}>
        <CountryScreen timezone="Europe/Madrid" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MadridScreen;
