import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, ImageBackground, Animated} from 'react-native';
import colors from '../config/colors';
import AppText from './../components/AppText';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {getDataPokemon} from '../store/actions/dataPokemon';
import {useDispatch} from 'react-redux';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();
  const translation = useRef(new Animated.Value(RFPercentage(110))).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: RFPercentage(72),
      useNativeDriver: true,
      duration: 1200,
    }).start();
    dispatch(getDataPokemon());
  }, []);

  return (
    <ImageBackground
      style={styles.image}
      source={require('../assets/img/background.png')}>
      <Animated.View style={{transform: [{translateY: translation}]}}>
        <View style={styles.container}>
          <AppText
            style={styles.signup}
            onPress={() => navigation.replace('Register')}>
            Sign up
          </AppText>
          <AppText
            style={styles.login}
            onPress={() => navigation.replace('Login')}>
            Log in
          </AppText>
          <AppText style={styles.wellcom}>wellcom to the pokemon go</AppText>
        </View>
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.grey4,
    bottom: 0,
    opacity: 0.8,
    borderTopRightRadius: RFPercentage(10),
    borderTopLeftRadius: RFPercentage(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  signup: {
    fontSize: RFPercentage(3),
    fontWeight: '700',
    width: RFPercentage(22),
    backgroundColor: colors.medium,
    padding: RFPercentage(2.5),
    borderRadius: RFPercentage(3),
    position: 'absolute',
    left: RFPercentage(2),
    top: RFPercentage(5),
  },
  login: {
    fontSize: RFPercentage(3),
    fontWeight: '700',
    width: RFPercentage(22),
    backgroundColor: colors.secondary,
    padding: RFPercentage(2.5),
    borderRadius: RFPercentage(3),
    position: 'absolute',
    right: RFPercentage(2),
    top: RFPercentage(5),
  },
  wellcom: {
    color: colors.black,
    fontSize: RFPercentage(2),
    padding: RFPercentage(3),
    borderRadius: RFPercentage(3),
    position: 'absolute',
    top: RFPercentage(15),
  },
});

export default Splash;
