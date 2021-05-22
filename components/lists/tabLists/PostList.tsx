
import React, { useState, useEffect } from 'react';
import { HScrollView, HFlatList } from 'react-native-head-tab-view'
import { API } from "@env";
import { ActivityIndicator } from 'react-native';

import { http } from '../../../networking/HttpRequest';
import PostListItem from '../listItems/PostListItem';
import { View } from '../../Themed';
import { FlatList } from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import Style from '../../../constants/Style';

const PostList = ({ index, posts, loading }: any) => {
    const colorScheme = useColorScheme();

    const renderItem = ({ item }: any) => {
        return (
            <PostListItem title={item.title} author={item.author} date={item.date} categories={item.categories} thumbnailLink={item.thumbnailLink} />
        )
    }

    const getSpinner = () => {
        if (!loading) {
            return null;
        }
        return (
        <View style={Style.spinnerView[colorScheme]}>
            <ActivityIndicator color={Colors[colorScheme].dark} size="small" />
        </View>
        );
    };

    return (
        <HFlatList
            keyExtractor={(item, index) => index.toString()}
            index={index}
            data={posts}
            renderItem={renderItem}
            ListFooterComponent={getSpinner}
        />
    );
};

export default PostList;