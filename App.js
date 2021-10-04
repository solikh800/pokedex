import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = props => {
  return (
    <View style={styles.container}>
      <Text>Pokdex</Text>
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
