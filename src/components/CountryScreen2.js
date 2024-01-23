import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const CountryScreen = ({ timezone,backgroundColor,text }) => {
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const getFormattedTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString();
  };

  useEffect(() => {
    fetchCountryInfo(timezone);
  }, [timezone]);

  const fetchCountryInfo = async (timezone) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://worldtimeapi.org/api/timezone/${timezone}`);
      setCountryInfo(response.data);
    } catch (error) {
      console.error('Error fetching country information:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7FC7D9" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.contentContainer}>
        {countryInfo && (
          <>
            <Text style={{fontSize:20,marginBottom:15}}>Merhaba,Emre!</Text>
            <Text style={styles.title}>{timezone}</Text>
            <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center"}}>{getFormattedTime()}</Text>
            <Text style={styles.text}>Current Time: {countryInfo.utc_datetime}</Text>
            <Text style={styles.text}>Timezone: {countryInfo.timezone}</Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: '#0B60B0',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    margin: 10,
    color:"white"
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CountryScreen;
