
import React from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native';
import PostListItem from '../listItems/PostListItem';
import { View } from '../../Themed';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import Style from '../../../constants/Style';
import { Tabs } from 'react-native-collapsible-tab-view'

const PostList = ({ index, posts, loading, navigation }: any) => {
    const colorScheme = useColorScheme();

    const renderItem = ({ item }: any) => {
        return (
            <PostListItem
                navigation={navigation}
                id={item.id}
                title={item.title}
                author={item.author}
                date={item.date}
                categories={item.categories}
                thumbnailLink={item.thumbnailLink} />
        )
    }

    const getSpinner = () => {
        if (!loading) {
            return null;
        }
        return (
            <View style={Style.spinnerView[colorScheme]}>
                <ActivityIndicator color={Colors[colorScheme].dark} />
            </View>
        );
    };

    return (
        <>
            <Tabs.FlatList
                keyExtractor={(item, index) => index.toString()}
                index={index}
                data={posts}
                initialNumToRender={5}
                renderItem={renderItem}
                ListFooterComponent={getSpinner}
            />
            <View style={{
                height: 60
            }} />
        </>
    );
};

export default PostList;