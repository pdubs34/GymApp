import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import useFetch from '../hooks/useFetch';

const ExampleComponent = () => {
  const [endpoint, setEndpoint] = useState<string | null>(null);
  const { data, loading, error } = useFetch(endpoint);

  const handleFetch = () => {
    setEndpoint('WeatherForecast');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a reusable component!</Text>
      <Button title="Fetch Button" onPress={handleFetch} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>Error: {error.message}</Text>}
      {data && <Text style={styles.data}>{JSON.stringify(data, null, 2)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  data: {
    marginTop: 10,
    color: '#333',
  },
});

export default ExampleComponent;
