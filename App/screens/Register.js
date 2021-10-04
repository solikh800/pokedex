import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import * as Yup from 'yup';

import AppText from '../components/AppText';
import Container from '../components/Container';
import colors from '../config/colors';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import Icon from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box';

const validationSchema = Yup.object().shape({
  user: Yup.string().required().min(5).max(264).label('UserName'),
  mail: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(5).max(264).label('Password'),
});
const Register = props => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setisChecked] = useState(false);

  const sendMessage = async (val, resetForm) => {
    setLoading(true);
    setTimeout(() => {
      Alert.alert('Register');
      setLoading(false);
      resetForm();
    }, 1500);
  };
  return (
    <Container style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon name="login" size={RFPercentage(5)} color={colors.grey5} />
        <AppText style={styles.textTitle}>Sign up</AppText>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <AppForm
            initialValues={{
              user: '',
              mail: '',
              password: '',
            }}
            onSubmit={(values, {resetForm}) => sendMessage(values, resetForm)}
            validationSchema={validationSchema}>
            <AppFormField
              name="user"
              placeholder="username"
              icon="person"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <AppFormField
              name="mail"
              placeholder="Email"
              icon="mail"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppFormField
              name="password"
              placeholder="Password"
              icon="lock-closed"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
            />
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                style={{marginHorizontal: RFPercentage(1)}}
                onClick={() => {
                  setisChecked(!isChecked);
                }}
                isChecked={isChecked}
                checkBoxColor={colors.grey3}
                // leftText={'CheckBox'}
              />
              <AppText>I agree with </AppText>
              <TouchableOpacity>
                <AppText style={{color: colors.accent}}>Terms</AppText>
              </TouchableOpacity>
              <AppText> and </AppText>
              <TouchableOpacity>
                <AppText style={{color: colors.accent}}>Privacy</AppText>
              </TouchableOpacity>
            </View>
            <SubmitButton title="Sign up" />
          </AppForm>
          <View style={styles.buttomTextContainer}>
            <AppText style={styles.buttomText}>
              Already have an account?
            </AppText>
            <TouchableOpacity>
              <AppText style={[styles.buttomText, {color: colors.accent}]}>
                Log in
              </AppText>
            </TouchableOpacity>
          </View>
          {loading && (
            <View style={styles.containerActivity}>
              <ActivityIndicator
                size="large"
                color={colors.grey5}
                visible={loading}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFPercentage(20),
    paddingVertical: RFPercentage(5),
  },
  textTitle: {
    color: colors.grey5,
    fontSize: RFPercentage(3.5),
    fontWeight: 'bold',
    marginVertical: RFPercentage(2),
    marginHorizontal: RFPercentage(2),
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: 1,
    padding: RFPercentage(0.2),
  },
  containerActivity: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttomTextContainer: {
    marginVertical: RFPercentage(3.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttomText: {
    fontSize: RFPercentage(2),
    marginVertical: RFPercentage(0.5),
  },
});

export default Register;
