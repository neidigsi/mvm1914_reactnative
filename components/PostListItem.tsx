import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from '../components/Themed';
import { SceneMap } from 'react-native-tab-view';
import { HScrollView } from 'react-native-head-tab-view'
import TabLayout from '../components/tabs/TabLayout';
import Style from '../constants/Style';
import useColorScheme from '../hooks/useColorScheme';
import { Button, ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const transparent = "rgba(0,0,0,0.0)";

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
                <View style={{ flexDirection: 'row', backgroundColor: transparent }}>
                    <View style={{ backgroundColor: transparent }}>
                        <Text style={Style.listItem.author}>
                            {author}
                        </Text>
                        <Text style={Style.listItem.date}>
                            {date}
                        </Text>
                    </View>
                    <TouchableOpacity style={Style.listItem.button} >
                        <Text style={Style.listItem.buttonText}>Ansehen</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default PostListItem;