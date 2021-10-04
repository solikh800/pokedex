import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import colors from '../config/colors';
import {RFPercentage} from 'react-native-responsive-fontsize';

const Container = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      <StatusBar barStyle="dark-content" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: RFPercentage(1.2),
    width: '100%',
    height: '100%',
  },
});

export default Container;
