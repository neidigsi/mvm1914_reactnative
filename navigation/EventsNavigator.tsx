import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EventsScreen from '../screens/events/EventsScreen';
import { EventsParamList } from '../types';
import SingleEventScreen from '../screens/events/SingleEventScreen';

const EventsStack = createStackNavigator<EventsParamList>();

const EventsNavigator = () => {
    return (
        <EventsStack.Navigator>
            <EventsStack.Screen
                name="EventsScreen"
                component={EventsScreen}
                options={{
                    headerShown: false
                }}
            />
            <EventsStack.Screen
                name="SingleEventScreen"
                component={SingleEventScreen}
                options={{
                    headerShown: false
                }}
            />
        </EventsStack.Navigator>
    );
}

export default EventsNavigator;