
import React from 'react';
import { HFlatList } from 'react-native-head-tab-view'
import { ActivityIndicator } from 'react-native';

import GalleryListItem from '../listItems/GalleryListItem';
import { View } from '../../Themed';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import Style from '../../../constants/Style';

const GalleryList = ({ index, year, galleries, loading, navigation }: any) => {
    const colorScheme = useColorScheme();

    const renderItem = ({ item }: any) => {
        return (
            <GalleryListItem
                navigation={navigation}
                id={item.id}
                title={item.title}
                year={year}
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
            <HFlatList
                keyExtractor={(item, index) => index.toString()}
                index={index}
                data={galleries}
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

export default GalleryList;