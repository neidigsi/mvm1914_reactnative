import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera, Book, Calendar } from "react-native-feather";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PostsScreen from '../screens/PostsScreen';
import EventsScreen from '../screens/EventsScreen';
import GalleriesScreen from '../screens/GalleriesScreen';
import { BottomTabParamList, EventsParamList, GalleriesParamList, PostsParamList } from '../types';
import { Text, View } from '../components/Themed';
import { TouchableWithoutFeedback } from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const [tab, setTab] = useState("posts");

  return (
    <BottomTab.Navigator
      initialRouteName="Posts"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].dark,
        inactiveTintColor: Colors[colorScheme].grey,
        showLabel: false,
        style: {
          borderWidth: 0.5,
          borderBottomWidth: 1,
          height: 90,
          backgroundColor: Colors[colorScheme].light,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderColor: Colors[colorScheme].light,
          position: 'absolute'
        },
      }}>

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
              <Book name="bottombar-posts" color={color} />
              <Text style={{ height: 6 }}></Text>
              <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: Colors[colorScheme].light }}>
                <FontAwesomeIcon icon={faCircle} size={6} style={{
                  opacity: tab !== undefined && tab === "posts" ? 1 : 0
                }} />
              </View>
            </View>,
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
              <Calendar name="bottombar-events" color={color} />
              <Text style={{ height: 6 }}></Text>
              <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: Colors[colorScheme].light }}>
                 <FontAwesomeIcon icon={faCircle} size={6} style={{
                  opacity: tab !== undefined && tab === "events" ? 1 : 0
                }}/>
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
              <Camera name="bottombar-galleries" color={color} />
              <Text style={{ height: 6 }}></Text>
              <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: Colors[colorScheme].light }}>
               <FontAwesomeIcon icon={faCircle} size={6} style={{
                  opacity: tab !== undefined && tab === "galleries" ? 1 : 0
                }}/>
              </View>
            </View>
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const PostsStack = createStackNavigator<PostsParamList>();

function PostsNavigator() {
  return (
    <PostsStack.Navigator>
      <PostsStack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ headerTitle: 'Berichte' }}
      />
    </PostsStack.Navigator>
  );
}

const EventsStack = createStackNavigator<EventsParamList>();

function EventsNavigator() {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{ headerTitle: 'Veranstaltungen' }}
      />
    </EventsStack.Navigator>
  );
}

const GalleriesStack = createStackNavigator<GalleriesParamList>();

function GalleriesNavigator() {
  return (
    <GalleriesStack.Navigator>
      <GalleriesStack.Screen
        name="GalleriesScreen"
        component={GalleriesScreen}
        options={{ headerTitle: 'Galerie' }}
      />
    </GalleriesStack.Navigator>
  );
}
