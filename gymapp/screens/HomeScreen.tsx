import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExampleComponent from '../components/exampleComponent';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ExampleComponent></ExampleComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default HomeScreen;
