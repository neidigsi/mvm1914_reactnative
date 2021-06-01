import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PostsScreen from '../screens/posts/PostsScreen';
import { PostsParamList } from '../types';
import SinglePostScreen from '../screens/posts/SinglePostScreen';

const PostsStack = createStackNavigator<PostsParamList>();

const PostsNavigator = () => {
    return (
        <PostsStack.Navigator>
            <PostsStack.Screen
                name="PostsScreen"
                component={PostsScreen}
                options={{
                    headerShown: false
                }}
            />
            <PostsStack.Screen
                name="SinglePostScreen"
                component={SinglePostScreen}
                options={{
                    headerShown: false
                }}
                />
        </PostsStack.Navigator>
    );
}

export default PostsNavigator;