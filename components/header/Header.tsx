/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { Ionicons } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 
 import Colors from '../../constants/Colors';
 import useColorScheme from '../../hooks/useColorScheme';

 import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../../types';
 
 
 export default function Header() {
   const colorScheme = useColorScheme();
 
   return (
     <div>
         Test
     </div>
   );
 }