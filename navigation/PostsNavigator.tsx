import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Style from '../constants/Style';
import useColorScheme from '../hooks/useColorScheme';
import PostsScreen from '../screens/PostsScreen';
import HeaderLeft from '../components/header/HeaderLeft';
import { PostsParamList } from '../types';

const PostsStack = createStackNavigator<PostsParamList>();

export default function PostsNavigator() {
    const colorScheme = useColorScheme();

    return (
        <PostsStack.Navigator>
            <PostsStack.Screen
                name="PostsScreen"
                component={PostsScreen}
                options={{
                    headerTitle: "",
                    headerLeft: props => <HeaderLeft {...props} title="Berichte" back={false} />,
                    headerStyle: Style.headerStyle[colorScheme],
                }}
            />
        </PostsStack.Navigator>
    );
}