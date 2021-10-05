// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import AppNavigator from './AppNavigator';
// import Search from './../screens/Search';
// import Icon from './../components/icon/index';
// import colors from '../config/colors';
// import Bookmark from '../screens/Bookmark';
// import Suport from './../screens/Suport';
// import BestMusic from './../screens/BestMusic';

// const Tab = createBottomTabNavigator();

// const BottomTab = props => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveBackgroundColor: colors.background,
//         tabBarInactiveBackgroundColor: colors.background,
//         tabBarInactiveTintColor: colors.greyOutline,
//         tabBarActiveTintColor: colors.danger,
//         tabBarShowLabel: false,
//       }}>
//       <Tab.Screen
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({color, size}) => (
//             <Icon name="home" color={color} size={size} />
//           ),
//         }}
//         name="AppNavigator"
//         component={AppNavigator}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="search" color={color} size={size} />
//           ),
//         }}
//         name="Search"
//         component={Search}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="best" color={color} size={size} />
//           ),
//         }}
//         name="BestMusic"
//         component={BestMusic}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="bookmarkMenu" color={color} size={size} />
//           ),
//         }}
//         name="Bookmark"
//         component={Bookmark}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="phone" color={color} size={size} />
//           ),
//         }}
//         name="Suport"
//         component={Suport}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomTab;
