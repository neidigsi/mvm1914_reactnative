import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GalleriesScreen from '../screens/galleries/GalleriesScreen';
import { GalleriesParamList } from '../types';

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
        </GalleriesStack.Navigator>
    );
}

export default GalleriesNavigator;