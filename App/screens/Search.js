/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Animated,
  FlatList,
  Alert,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import * as Yup from 'yup';
import Axios from 'axios';

import AppText from '../components/AppText';
import Container from '../components/Container';
import colors from '../config/colors';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import address from '../config/address';
import Icon from 'react-native-vector-icons/Ionicons';
import PokemonCard from './../components/PokemonCard.js';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(264).label('Name'),
});
const Search = ({navigation}) => {
  const [data, setData] = useState([]);
  const [openClose, setOpenClose] = useState(true);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (val, resetForm) => {
    setLoading(true);
    await Axios.get(`${address.server}/${val.name}`)
      .then(res => {
        handleClose();
        resetForm();
        console.log('res', res);
        setData([res.data]);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(err => {
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            if (!!err.message) {
              if (err.response !== undefined) {
                console.log(err.response);
                Alert.alert('Search', err.response.data);
              } else {
              }
            }
          }, 1);
        }, 500);
      });
  };

  const translation = useRef(new Animated.Value(0)).current;
  const handleOpen = () => {
    Animated.timing(translation, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1200,
    }).start();
    setOpenClose(true);
  };
  const handleClose = () => {
    Animated.timing(translation, {
      toValue: RFPercentage(-20),
      useNativeDriver: true,
      duration: 1200,
    }).start();
    setOpenClose(false);
  };

  return (
    <Container style={styles.container}>
      <View style={styles.titleContainer}>
        <AppText style={styles.textTitle}>Search for a pokemon</AppText>
      </View>
      <View style={styles.scrollContainer}>
        <Animated.View
          style={{
            width: '100%',
            alignItems: 'center',
            transform: [{translateY: translation}],
          }}>
          <AppForm
            initialValues={{name: ''}}
            onSubmit={(values, {resetForm}) => sendMessage(values, resetForm)}
            validationSchema={validationSchema}>
            <AppFormField
              name="name"
              placeholder="Searching using Pokemon’s name :"
              icon="search"
              autoCorrect={false}
              autoCapitalize="none"
            />

            <SubmitButton title="ُSearch Now" />
          </AppForm>

          <Icon
            onPress={openClose === false ? handleOpen : handleClose}
            name={openClose === true ? 'chevron-up' : 'chevron-down'}
            size={RFPercentage(3)}
            color={colors.grey3}
          />

          <FlatList
            style={{width: '100%'}}
            // style={{height: 500}}
            data={data}
            keyExtractor={item => item.id.toString()}
            numColumns="2"
            renderItem={({item, index}) => (
              <PokemonCard item={item} index={index} navigation={navigation} />
            )}
          />
        </Animated.View>
      </View>
      {loading && (
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={colors.grey5} />
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
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
  textTitle: {
    color: colors.grey5,
    fontFamily: 'vazirBold',
    fontSize: RFPercentage(2.7),
    marginVertical: RFPercentage(1),
    zIndex: 100,
  },
  textSubtitle: {
    color: colors.grey3,
    fontSize: RFPercentage(1.5),
    marginVertical: RFPercentage(1),
    textAlign: 'right',
  },
  flatListContainer: {
    width: '100%',
    backgroundColor: 'red',
    flex: 1,
  },
});

export default Search;
