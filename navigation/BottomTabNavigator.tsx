import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { Camera, Book, Calendar } from 'react-native-feather';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import EventsNavigator from './EventsNavigator';
import PostsNavigator from './PostsNavigator';
import GalleriesNavigator from './GalleriesNavigator';
import { BottomTabParamList } from '../types';
import { Text, View } from '../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import Style from '../constants/Style';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const [tab, setTab] = useState<String>("posts");
  const [hideNavBar, setHideNavBar] = useState<Boolean>(false)

  return (
    <SafeAreaView edges={[]} style={
      Style.saveArea.saveArea
    }>
      <BottomTab.Navigator
        initialRouteName="Posts"
        screenOptions={
          hideNavBar ?
            Style.tabs.tabBarOptionsHidden :
            Style.tabs.tabBarOptions
        }
        safeAreaInsets={{ bottom: 0 }}
      >

        <BottomTab.Screen
          name="Posts"
          component={PostsNavigator}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              setTab("posts");
              navigation.navigate("Posts");
            },
          })}
          options={{
            tabBarIcon: ({ color }) =>
              <View style={{ backgroundColor: Colors[colorScheme].light }}>
                <Book name="bottombar-posts" color={color} width="18" height="18" />
                <Text style={{ height: 5 }}></Text>
                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: Colors[colorScheme].light }}>
                  <FontAwesomeIcon icon={faCircle} size={5} style={{
                    opacity: tab !== undefined && tab === "posts" ? 1 : 0
                  }} />
                </View>
              </View>
          }}
        />

        <BottomTab.Screen
          name="Events"
          component={EventsNavigator}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              setTab("events");
              navigation.navigate("Events");
            },
          })}
          options={{
            tabBarIcon: ({ color }) =>
              <View style={{ backgroundColor: Colors[colorScheme].light }} >
                <Calendar name="bottombar-events" color={color} width="18" height="18" />
                <Text style={{ height: 5 }}></Text>
                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: Colors[colorScheme].light }}>
                  <FontAwesomeIcon icon={faCircle} size={5} style={{
                    opacity: tab !== undefined && tab === "events" ? 1 : 0
                  }} />
                </View>
              </View>,
          }}
        />

        <BottomTab.Screen
          name="Galleries"
          component={GalleriesNavigator}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              setTab("galleries");
              navigation.navigate("Galleries");
            },
          })}
          options={{
            tabBarIcon: ({ color }) =>
              <View style={{ backgroundColor: Colors[colorScheme].light }} >
                <Camera name="bottombar-galleries" color={color} width="18" height="18" />
                <Text style={{ height: 6 }}></Text>
                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: Colors[colorScheme].light }}>
                  <FontAwesomeIcon icon={faCircle} size={5} style={{
                    opacity: tab !== undefined && tab === "galleries" ? 1 : 0
                  }} />
                </View>
              </View>
          }}
        />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
}