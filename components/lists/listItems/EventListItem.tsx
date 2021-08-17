import * as React from 'react';
import { View, Text } from '../../Themed';
import Style from '../../../constants/Style';
import useColorScheme from '../../../hooks/useColorScheme';
import Moment from 'react-moment';
import { ImageBackground, TouchableOpacity } from 'react-native';

const transparent = "rgba(0,0,0,0.0)";

const EventListItem = ({
    id,
    navigation,
    startDate,
    endDate,
    allDayEvent,
    title,
    location,
    categories,
    thumbnailLink
}: any) => {
    const colorScheme = useColorScheme();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("SingleEventScreen", { id: id, categories: categories })} >
            <View style={Style.listItem.item[colorScheme]}>
                <ImageBackground
                    source={{ uri: thumbnailLink.toString() }}
                    style={Style.listItem.image}
                    imageStyle={Style.listItem.imageStyle}>
                    <Text style={Style.listItem.category}>
                        {
                            categories.filter(
                                (c: string) =>
                                    c === "Juniorband"
                                    || c === "Musikalische Frühförderung"
                                    || c === "Blockflötengruppen"
                                    || c === "Jugendorchester"
                                    || c === "Großes Orchester"
                                    || c === "Horsch e-mol(l)").join(" | ")
                        }
                    </Text>
                    <Text style={Style.listItem.title}>
                        {title.length > 90 ?
                            title.slice(0, 80) + '...' :
                            title
                        }
                    </Text>
                    <View style={{ flexDirection: 'row', backgroundColor: transparent, alignItems: "flex-end", flex: 1, marginBottom: 15 }}>
                        <View style={{ backgroundColor: transparent, width: "70%" }}>
                            <Text style={Style.listItem.author}>
                                {location}
                            </Text>
                            {
                                allDayEvent !== undefined
                                && allDayEvent
                                && startDate !== undefined
                                && endDate !== undefined
                                && startDate === endDate &&
                                <Moment element={Text} style={Style.listItem.date} format="DD.MM.YYYY" date={startDate} />
                            }
                            {
                                allDayEvent !== undefined
                                && allDayEvent
                                && startDate !== undefined
                                && endDate !== undefined
                                && startDate !== endDate &&
                                <>
                                    <Moment element={Text} style={Style.listItem.date} format="DD.MM.YYYY" date={startDate} />
                                    <Text style={Style.listItem.date}> - </Text>
                                    <Moment element={Text} style={Style.listItem.dateWithoutSidePadding} format="DD.MM.YYYY" date={endDate} />
                                </>
                            }
                            {
                                (allDayEvent === undefined || !allDayEvent) && startDate !== undefined && endDate !== undefined &&
                                <Moment element={Text} style={Style.listItem.date} format="DD.MM.YYYY | HH:mm U\hr" date={startDate} />
                            }
                        </View>
                        <TouchableOpacity style={Style.listItem.button} onPress={() => navigation.navigate("SingleEventScreen", { id: id, categories: categories })} >
                            <Text style={Style.listItem.buttonText}>Ansehen</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

export default EventListItem;