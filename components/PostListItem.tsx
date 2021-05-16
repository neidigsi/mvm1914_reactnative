import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from '../components/Themed';
import { SceneMap } from 'react-native-tab-view';
import { HScrollView } from 'react-native-head-tab-view'
import TabLayout from '../components/tabs/TabLayout';
import Style from '../constants/Style';
import useColorScheme from '../hooks/useColorScheme';
import { ImageBackground } from 'react-native';


const PostListItem = ({ title, date, categories, author, thumbnailLink }: any) => {
    const colorScheme = useColorScheme();

    return (
        <View style={Style.listItem.item[colorScheme]}>
            <ImageBackground
                source={{ uri: thumbnailLink }}
                style={Style.listItem.image}
                imageStyle={Style.listItem.imageStyle}>
                <Text style={Style.listItem.category}>
                    {categories.join(" | ")}
                </Text>
                <Text style={Style.listItem.title}>
                    {title}
                </Text>
            </ImageBackground>
        </View>
    );
}

export default PostListItem;