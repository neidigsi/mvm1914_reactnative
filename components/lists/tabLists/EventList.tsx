
import React from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native';

import EventListItem from '../listItems/EventListItem';
import { View } from '../../Themed';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import Style from '../../../constants/Style';

const EventList = ({ index, events, loading, navigation }: any) => {
    const colorScheme = useColorScheme();

    const renderItem = ({ item }: any) => {
        return (
            <EventListItem
                navigation={navigation}
                id={item.id}
                title={item.title}
                location={item.location.name}
                startDate={item.startDate}
                endDate={item.endDate}
                allDayEvent={item.allDayEvent}
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
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                //index={index}
                data={events}
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

export default EventList;