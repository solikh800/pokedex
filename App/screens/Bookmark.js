/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeBookmark} from '../store/actions/dataPokemon';
import {RFPercentage} from 'react-native-responsive-fontsize';

import AppText from '../components/AppText';
import Container from '../components/Container';
import colors from '../config/colors';
import {useSelector} from 'react-redux';
import PokemonCard from '../components/PokemonCard.js';

const Bookmark = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.pokemonReducer.fovData);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // dispatch(getDataPokemon());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const deleteItem = dataItem => {
    dispatch(removeBookmark(dataItem.id));
  };
  return (
    <Container style={styles.container}>
      <Image
        resizeMode="contain"
        style={{width: 200, height: 70}}
        source={require('../assets/img/title.png')}
      />
      <AppText>Bookmark</AppText>

      <FlatList
        style={{width: '100%'}}
        data={data}
        keyExtractor={item => item.id.toString()}
        numColumns="2"
        renderItem={({item, index}) => (
          <PokemonCard
            item={item}
            index={index}
            navigation={navigation}
            deleteItem={() => deleteItem(item)}
          />
        )}
      />

      {loading && (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size="large" color={colors.grey5} />
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    color: colors.grey5,
    fontWeight: '700',
    fontSize: RFPercentage(2.7),
    marginVertical: RFPercentage(1),
  },

  ActivityIndicator: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    zIndex: 100,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
    paddingTop: RFPercentage(0.8),
  },

  textSubtitle: {
    color: colors.grey3,
    fontSize: RFPercentage(1.5),
    marginVertical: RFPercentage(1),
    textAlign: 'right',
  },
});

export default Bookmark;
