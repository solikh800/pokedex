import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import AppText from './AppText';
import {RFPercentage} from 'react-native-responsive-fontsize';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const PokemonCard = ({navigation, item, deleteItem}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detailes', {item})}>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{item.name}</AppText>
        <AppText style={styles.experience}>
          experience : {item['base_experience']}
        </AppText>

        <AppText style={styles.types}>Type : {item.types[0].type.name}</AppText>
        <AppText style={styles.weight}>weight : {item.weight}</AppText>
      </View>

      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: item['sprites']['other']['official-artwork']['front_default'],
        }}
      />
      {deleteItem && (
        <TouchableOpacity onPress={deleteItem} style={styles.close}>
          <Icon name="close" size={RFPercentage(3.5)} color={colors.danger} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: RFPercentage(1),
    padding: RFPercentage(0.1),
    marginTop: RFPercentage(7),
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '47%',
    height: RFPercentage(25),
    backgroundColor: colors.secondary,
    borderRadius: RFPercentage(3),
    // overflow: 'hidden',
    elevation: 4,
  },
  image: {
    width: RFPercentage(16),
    height: RFPercentage(16),
    position: 'absolute',
    top: RFPercentage(-8),
  },
  textContainer: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    bottom: 0,
    alignItems: 'center',
  },
  title: {
    marginTop: RFPercentage(5),
    fontSize: RFPercentage(2.3),
    fontWeight: '800',
    backgroundColor: '#ffcc5c',
    width: RFPercentage(15),
    color: colors.background,
    padding: RFPercentage(0.7),
    borderRadius: RFPercentage(2),
    textAlign: 'center',
  },
  experience: {
    position: 'absolute',
    left: RFPercentage(1),
    bottom: RFPercentage(2),
    color: colors.greyOutline,
  },
  types: {
    position: 'absolute',
    left: RFPercentage(1),
    bottom: RFPercentage(9),
    color: colors.greyOutline,
  },
  weight: {
    position: 'absolute',
    left: RFPercentage(1),
    bottom: RFPercentage(5),
    color: colors.greyOutline,
  },
  close: {
    width: RFPercentage(5),
    height: RFPercentage(5),
    position: 'absolute',
    top: RFPercentage(-3),
    right: RFPercentage(-2),
  },
});

export default PokemonCard;
