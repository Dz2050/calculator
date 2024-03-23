import React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from './Calculator';

const App = () => {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
