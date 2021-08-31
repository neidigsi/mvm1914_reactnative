import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GalleriesScreen from '../screens/galleries/GalleriesScreen';
import { GalleriesParamList } from '../types';
import SingleGalleryScreen from '../screens/galleries/SingleGalleryScreen';

const GalleriesStack = createStackNavigator<GalleriesParamList>();

const GalleriesNavigator = () => {
    return (
        <GalleriesStack.Navigator>
            <GalleriesStack.Screen
                name="GalleriesScreen"
                component={GalleriesScreen}
                options={{
                    headerShown: false
                }}
            />
            <GalleriesStack.Screen
                name="SingleGalleryScreen"
                component={SingleGalleryScreen}
                options={{
                    headerShown: false
                }}
            />
        </GalleriesStack.Navigator>
    );
}

export default GalleriesNavigator;