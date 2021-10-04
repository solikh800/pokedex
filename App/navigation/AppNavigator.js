import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Library from './../screens/Library';
import AllArtist from './../screens/AllArtist';
import PlayListPage from './../screens/PlayListPage';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Library" component={Library} />
    <Stack.Screen name="AllArtist" component={AllArtist} />
    <Stack.Screen name="PlayListPage" component={PlayListPage} />
  </Stack.Navigator>
);

export default AppNavigator;
