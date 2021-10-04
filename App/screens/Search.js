/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, Animated} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import * as Yup from 'yup';
import Axios from 'axios';

import AppText from '../components/AppText';
import Container from '../components/Container';
import colors from '../config/colors';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import address from '../config/address';
import ModalError from './../components/modalAlert/modalError';
import Icon from './../components/icon/index';
import AppRadioButton from '../components/AppRadioButton';
import MusicFlatList from '../components/MusicFlatList';
import ArtistFlatList from '../components/ArtistFlatList';

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .required('وارد کردن این فیلد الزامیست')
    .min(3, 'حداقل 3 کاراکتر میباشد')
    .max(264, 'حداکثر 264 کاراکتر میباشد')
    .label('Text'),
});
const Search = ({navigation}) => {
  const [check, setcheck] = useState({
    label: 'نام خواننده',
    name: 'artist',
  });
  const [containerView, setContainerView] = useState('');
  const [dataArtist, setDataArtist] = useState([]);
  const [openClose, setOpenClose] = useState(true);
  const [dataTitle, setDataTitle] = useState([]);
  const [visibleError, setvisibleError] = useState(false);
  const [errorText, setEroorText] = useState('خطا در ورود اطلاعات');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (val, resetForm) => {
    const dataSearch = {val, check};
    setLoading(true);
    await Axios.post(`${address.server}/search`, JSON.stringify(dataSearch), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        resetForm();
        if (res.data.length !== 0) {
          setContainerView(check.name);
          if (check.name === 'artist') {
            setDataArtist(res.data);
          } else if (check.name === 'title' || check.name === 'other') {
            setDataTitle(res.data);
          }
          handleClose();
        } else {
          setContainerView('nothing');
        }
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(err => {
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            setvisibleError(true);
            if (!!err.message) {
              if (err.response !== undefined) {
                setEroorText(err.response.data.message);
                setvisibleError(true);
              } else {
                setEroorText('لطفا اتصال اینترنت خود را بررسی کنید');
                setvisibleError(true);
              }
            }
          }, 1);
        }, 500);
      });
  };

  const handlevisibleError = () => {
    setvisibleError(false);
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
      toValue: RFPercentage(-31),
      useNativeDriver: true,
      duration: 1200,
    }).start();
    setOpenClose(false);
  };

  return (
    <Container style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon
          name="music"
          tuoch
          size={RFPercentage(2.7)}
          color={colors.danger}
        />
        <AppText style={styles.textTitle}>جستجوی آهنگ </AppText>
        <Icon
          name="music"
          tuoch
          size={RFPercentage(2.7)}
          color={colors.danger}
        />
      </View>
      <View style={styles.scrollContainer}>
        <Animated.View
          style={{
            width: '100%',
            alignItems: 'center',
            transform: [{translateY: translation}],
          }}>
          <AppText style={styles.textSubtitle}>
            جستجو را بر اساس نام خواننده نام آهنگ یا سایر موارد انجام دهید{' '}
          </AppText>
          <AppForm
            initialValues={{text: ''}}
            onSubmit={(values, {resetForm}) => sendMessage(values, resetForm)}
            validationSchema={validationSchema}>
            <AppFormField
              name="text"
              placeholder={`جستجو بر اساس : ${check.label}`}
              icon="search"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <AppRadioButton selectedBtn={e => setcheck(e)} />

            <SubmitButton title="جستجو کن" />
          </AppForm>
          {dataArtist.length !== 0 || dataTitle.length !== 0 ? (
            <Icon
              onPress={openClose === false ? handleOpen : handleClose}
              name={openClose === true ? 'up' : 'down'}
              tuoch
              size={RFPercentage(3)}
            />
          ) : null}

          {containerView !== 'nothing' ? (
            containerView === 'artist' ? (
              <ArtistFlatList
                data={dataArtist}
                onPress={() => console.log('press', dataArtist)}
                navigation={navigation}
              />
            ) : containerView === 'title' || containerView === 'other' ? (
              <MusicFlatList data={dataTitle} />
            ) : null
          ) : (
            <>
              <AppText
                style={[
                  styles.textTitle,
                  {fontSize: RFPercentage(2), color: colors.danger},
                ]}>
                متاسفانه آهنگ مورد نظر شما یافت نشد
              </AppText>
            </>
          )}
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

      <ModalError
        visibleError={visibleError}
        title="خطا درارسال اطلاعات"
        text={errorText}
        onPressVisible={handlevisibleError}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
