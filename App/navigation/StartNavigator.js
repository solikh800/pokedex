import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './../screens/Onboarding';
import BottomTab from './BottomTab';
import ArtistPage from './../screens/ArtistPage';

const Stack = createStackNavigator();

const StartNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="ArtistPage" component={ArtistPage} />
    </Stack.Navigator>
  );
};

export default StartNavigator;
