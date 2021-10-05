import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import AppText from './AppText';
import {RFPercentage} from 'react-native-responsive-fontsize';
import colors from '../config/colors';

const PokemonCard = ({navigation, item}) => {
  console.log('ite', item);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('PlayListPage', {name: item.name})}>
      <AppText style={styles.title}>{item.name}</AppText>
      <AppText style={styles.experience}>
        experience : {item['base_experience']}
      </AppText>

      <AppText style={styles.types}> {item.types[0].type.name}</AppText>
      <AppText style={styles.weight}>weight : {item.weight}</AppText>

      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: item['sprites']['other']['official-artwork']['front_default'],
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: RFPercentage(0.5),
    padding: RFPercentage(0.1),
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '48%',
    height: RFPercentage(20),
    backgroundColor: colors.secondary,
    borderRadius: RFPercentage(2),
    overflow: 'hidden',
    elevation: 4,
  },
  image: {
    width: RFPercentage(16),
    height: RFPercentage(16),
    position: 'absolute',
    right: RFPercentage(0),
    bottom: RFPercentage(2),
  },
  title: {
    fontSize: RFPercentage(2.2),
    fontWeight: '800',
    color: '#ffcc5c',
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
});

export default PokemonCard;
