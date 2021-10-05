import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';

import Search from './../screens/Search';
import colors from '../config/colors';
import Bookmark from '../screens/Bookmark';
import Home from './../screens/Home';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = props => {
  return (
    <Tab.Navigator
      activeColor="#ffcc5c"
      inactiveColor={colors.greyOutline}
      barStyle={{backgroundColor: colors.background}}
      screenOptions={{
        tabBarLabel: false,
      }}>
      <Tab.Screen
        barStyle={{backgroundColor: 'tomato'}}
        options={{
          tabBarIcon: ({color, size = RFPercentage(3)}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size = RFPercentage(3)}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
        name="Search"
        component={Search}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size = RFPercentage(3)}) => (
            <Icon name="bookmarks" color={color} size={size} />
          ),
        }}
        name="Bookmark"
        component={Bookmark}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
