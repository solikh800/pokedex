import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';

const AppTextInput = ({onPress, icon, width = '95%', ...otherProps}) => {
  return (
    <View style={[styles.container, {width}]}>
      <Icon
        onPress={onPress}
        name={icon}
        size={RFPercentage(2.4)}
        color={colors.grey3}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={colors.grey3}
        style={[defaultStyles.text, styles.text]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: RFPercentage(3),
    flexDirection: 'row',
    paddingVertical: RFPercentage(1),
    marginBottom: RFPercentage(1.5),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  icon: {
    marginHorizontal: RFPercentage(1),
  },
  text: {
    color: colors.grey5,
    flex: 1,
    fontSize: RFPercentage(1.8),
  },
});

export default AppTextInput;
