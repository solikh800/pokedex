import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Login from './App/screens/Login';
import Register from './App/screens/Register';
const App = props => {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
