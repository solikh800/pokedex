import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFPercentage} from 'react-native-responsive-fontsize';
import colors from '../config/colors';
import AppText from './../components/AppText';
import Axios from 'axios';
import BookmarkComponent from '../components/BookmarkComponent';

const Detailes = ({navigation, route}) => {
  const [ability, setAbility] = useState('');

  const {item} = route.params;
  console.log('ite', item);
  const handleBackComponent = () => {
    navigation.goBack('BottomTab');
  };

  const getAbility = async () => {
    const result = await Axios.get(
      `https://pokeapi.co/api/v2/ability/${item.id}`,
    );
    setAbility(result.data['effect_entries'][1]['effect']);
  };
  useEffect(() => {
    getAbility();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackComponent} style={styles.header}>
        <Icon
          name="md-arrow-back-outline"
          size={RFPercentage(3.5)}
          color={colors.grey5}
        />
      </TouchableOpacity>
      <AppText style={styles.title}>{item.name}</AppText>
      <AppText>#{item.id}</AppText>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: item['sprites']['other']['official-artwork']['front_default'],
        }}
      />
      <AppText numberOfLines={4} style={styles.ability}>
        {ability}
      </AppText>
      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={[styles.topDetiles]}>
            <AppText style={styles.textDetiles}>About</AppText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.topDetiles}>
            <AppText style={styles.textDetiles}>state</AppText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.topDetiles}>
            <AppText style={styles.textDetiles}>Moves</AppText>
          </TouchableOpacity>
          <View style={styles.contanerBookmark}>
            <BookmarkComponent dataItem={item} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: colors.black,
    alignItems: 'center',
    paddingTop: RFPercentage(1.2),
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    padding: RFPercentage(1),
  },
  title: {
    fontSize: RFPercentage(2.8),
    fontWeight: 'bold',
  },
  image: {
    width: RFPercentage(35),
    height: RFPercentage(35),
  },
  ability: {
    marginHorizontal: RFPercentage(2),
    lineHeight: RFPercentage(2.5),
  },
  bottomContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: colors.grey4,
    marginTop: RFPercentage(2),
    borderTopLeftRadius: RFPercentage(8),
    borderTopRightRadius: RFPercentage(8),
    opacity: 0.7,
    alignItems: 'center',
  },
  topDetiles: {
    width: RFPercentage(14),
    height: RFPercentage(6),
    backgroundColor: colors.background,
    marginVertical: RFPercentage(1),
    marginHorizontal: RFPercentage(1),
    borderRadius: RFPercentage(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDetiles: {
    fontSize: RFPercentage(2),
  },
  contanerBookmark: {
    position: 'absolute',
    top: RFPercentage(10),
    right: RFPercentage(20),
    width: RFPercentage(7),
    height: RFPercentage(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Detailes;
