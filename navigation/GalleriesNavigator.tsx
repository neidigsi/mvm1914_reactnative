import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Style from '../constants/Style';
import useColorScheme from '../hooks/useColorScheme';
import GalleriesScreen from '../screens/GalleriesScreen';
import HeaderLeft from '../components/header/HeaderLeft';
import { GalleriesParamList } from '../types';

const GalleriesStack = createStackNavigator<GalleriesParamList>();

export default function GalleriesNavigator() {
    const colorScheme = useColorScheme();

    return (
        <GalleriesStack.Navigator>
            <GalleriesStack.Screen
                name="GalleriesScreen"
                component={GalleriesScreen}
                options={{
                    headerTitle: "",
                    headerLeft: props => <HeaderLeft {...props} title="Galerie" back={false} />,
                    headerStyle: Style.headerStyle[colorScheme],
                }}
            />
        </GalleriesStack.Navigator>
    );
}
