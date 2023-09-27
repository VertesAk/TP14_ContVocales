import React from 'react';
import { View, StyleSheet } from 'react-native';
import ContarVocales from './ContarVocales';

export default function App() {
  return (
    <View style={styles.container}>
      <ContarVocales />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
