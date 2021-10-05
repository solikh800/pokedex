import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './../screens/Login';
import Splash from './../screens/Splash';
import Register from './../screens/Register';
import BottomTab from './BottomTab';
import Detailes from './../screens/Detailes';

const Stack = createStackNavigator();

const StartNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Detailes" component={Detailes} />
    </Stack.Navigator>
  );
};

export default StartNavigator;
