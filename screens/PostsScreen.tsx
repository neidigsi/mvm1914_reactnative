import * as React from 'react';
import { Text, View } from '../components/Themed';
import Style from '../constants/Style';

export default function PostsScreen() {
  return (
    <View style={Style.screen.container}>
      <Text style={Style.screen.title}>Posts</Text>
      <View style={Style.screen.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}