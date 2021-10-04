import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';
import PickerItem from './PickerItem';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppPicker = ({
  icon,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  width = '100%',
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          <Icon
            name={icon}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <Icon name="chevron-down" size={20} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <Button title="close" onPress={() => setModalVisible(false)} />
        <FlatList
          numColumns={numberOfColumns}
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({item}) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
              label={item.label}
            />
          )}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 10,
    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    color: colors.medium,
    flex: 1,
  },
});

export default AppPicker;
