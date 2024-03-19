import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Fallback = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oops! Something went wrong.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Fallback;
