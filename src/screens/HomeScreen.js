import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleCountryRequest(); 
  }, []); 

  const handleCountryRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://worldtimeapi.org/api/timezone');
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCountryPress = (country) => {
    console.log('Selected country:', country);
  };

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a country"
        onChangeText={(text) => setSearchText(text)}
      />
      <Text style={styles.title}>Countries</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#7FC7D9" style={{ marginTop: 20 }} />
      ) : (
        filteredCountries.map((country) => (
          <TouchableOpacity
            key={country}
            style={styles.card}
            onPress={() => handleCountryPress(country)}
          >
            <Text style={styles.cardText}>{country}</Text>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginTop:12,
    marginBottom: 16,
    paddingLeft: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '80%',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#7FC7D9',
    borderRadius: 8,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
