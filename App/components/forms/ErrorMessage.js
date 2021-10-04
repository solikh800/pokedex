import React from 'react';
import {StyleSheet} from 'react-native';
import AppText from '../AppText';
import {RFPercentage} from 'react-native-responsive-fontsize';

const ErrorMessage = ({error, visible}) => {
  if (!visible || !error) {
    return null;
  }
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontWeight: '400',
    marginBottom: RFPercentage(2),
  },
});

export default ErrorMessage;
