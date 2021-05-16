import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PostsScreen from '../screens/PostsScreen';
import { PostsParamList } from '../types';

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
        </PostsStack.Navigator>
    );
}

export default PostsNavigator;