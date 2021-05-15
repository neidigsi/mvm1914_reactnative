import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Style from '../constants/Style';
import useColorScheme from '../hooks/useColorScheme';
import EventsScreen from '../screens/EventsScreen';
import HeaderLeft from '../components/header/HeaderLeft';
import { EventsParamList } from '../types';

const EventsStack = createStackNavigator<EventsParamList>();

export default function EventsNavigator() {
    const colorScheme = useColorScheme();
    return (
        <EventsStack.Navigator>
            <EventsStack.Screen
                name="EventsScreen"
                component={EventsScreen}
                options={{
                    headerTitle: "",
                    headerLeft: props => <HeaderLeft {...props} title="Veranstaltungen" back={false} />,
                    headerStyle: Style.headerStyle[colorScheme],
                }}
            />
        </EventsStack.Navigator>
    );
}

