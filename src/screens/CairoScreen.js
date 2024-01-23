// CairoScreen.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import CountryScreen from '../components/CountryScreen';

const image = { uri: 'https://images.pexels.com/photos/7566890/pexels-photo-7566890.jpeg?auto=compress&cs=tinysrgb&w=600' };

const CairoScreen = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
      <View style={styles.container}>
        <CountryScreen timezone="Africa/Cairo" />
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

export default CairoScreen;
