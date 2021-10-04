import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import colors from '../config/colors';
import AppText from './AppText';

const AppButton = ({title, onPress, color = 'medium'}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    minWidth: RFPercentage(40),
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFPercentage(2),
    borderRadius: RFPercentage(3),
    marginTop: RFPercentage(3),
  },
  text: {
    fontFamily: 'vazirBold',
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: RFPercentage(2.1),
  },
});

export default AppButton;
