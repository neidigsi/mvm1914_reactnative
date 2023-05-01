
import React, { useState, useEffect } from 'react';
import { API } from "@env";
import { http } from '../../networking/HttpRequest';
import {
    Dimensions,
    ActivityIndicator,
    Animated,
    ImageBackground,
    ScrollView,
    Share,
    TouchableOpacity,
    useWindowDimensions
} from 'react-native';
import { View, Text } from '../../components/Themed';
import { ChevronLeft, Share as ShareIcon, Navigation, Calendar } from 'react-native-feather';
import Style from '../../constants/Style';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import HTML from 'react-native-render-html';
import Moment from 'react-moment';
import MapView, { Marker } from 'react-native-maps';
import createMapLink from 'react-native-open-maps';
import * as AddCalendarEvent from 'react-native-add-calendar-event';

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const HEADER_EXPANDED_HEIGHT = 450;
const HEADER_COLLAPSED_HEIGHT = 60;

interface IEvent {
    title: string;
    url: string;
    description: string;
    startDate: string;
    endDate: string;
    allDayEvent: boolean
    author: string;
    thumbnailLink: string;
    location: {
        id: number;
        name: string;
        street: string;
        plz: string;
        city: string;
        state: string;
        country: string;
        latitude: string;
        longitude: string;
    };
}

interface Region {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}

const SingleEventScreen = ({ navigation, route }: any) => {
    const [scrollY, setScrollY] = useState(new Animated.Value(0));
    const [loading, setLoading] = useState<boolean>(true);
    const [event, setEvent] = useState<IEvent>();
    const colorScheme = useColorScheme();
    const [region, onRegionChange] = useState<Region>({
        latitude: 49.92919999999999,
        longitude: 8.863169999999968,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        setLoading(true);

        const getEvent = async () => {
            const eventFromServer = await fetchEvent();
            setEvent(eventFromServer);
            if (eventFromServer !== undefined
                && eventFromServer.location !== undefined
                && eventFromServer.location.latitude !== undefined
                && eventFromServer.location.longitude !== undefined) {
                onRegionChange({
                    latitude: parseFloat(eventFromServer.location.latitude),
                    longitude: parseFloat(eventFromServer.location.longitude),
                    latitudeDelta: region.latitudeDelta,
                    longitudeDelta: region.longitudeDelta,
                })
            }
            setLoading(false);
        }

        getEvent();
        setLoading(false);
    }, []);

    // Fetch event from rest-api
    const fetchEvent = async () => {
        setLoading(true);
        if (route.params.id !== undefined && route.params.id !== "") {
            const data = await http(`${API}/event/` + route.params.id, "GET", {});
            return data;
        } else {
            return undefined;
        }
    }

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: event !== undefined && event?.title !== undefined && event.url !== undefined ? "Schau dir mal diese Veranstaltung des Musikvereins an: " + event?.title + "\n" + event?.url : "",
            });
        } catch (error: any) {
            alert(error.message);
        }
    };


    const addToCalendar = async (title: string) => {
        const eventConfig = {
            title
        };

    };

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    });
    const headerTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });
    const heroTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    const contentWidth = useWindowDimensions().width;

    return (
        <>
            {
                loading ?
                    // Show loading spinner if the event is still loading
                    <View style={Style.spinnerView[colorScheme]}>
                        <ActivityIndicator color={Colors[colorScheme].dark} />
                    </View> :
                    // Else show the event
                    <View style={Style.singlePost.container[colorScheme]}>
                        {/* 
                            Header
                         */}
                        <Animated.View style={[Style.singlePost.header[colorScheme], { height: headerHeight }]}>
                            <ImageBackground
                                source={{ uri: event?.thumbnailLink.toString() }}
                                style={Style.singlePost.image}
                                imageStyle={Style.singlePost.imageStyle}>
                                {/* 
                                    Small header if the view is scrolled down
                                */}
                                <Animated.View style={[Style.singlePost.smallHeaderBackground[colorScheme], { opacity: headerTitleOpacity }]}>
                                    <TouchableOpacity style={{ flex: 1, width: "10%", alignItems: "center", justifyContent: "center" }} onPress={() => navigation.goBack()} >
                                        <ChevronLeft name="header-back" color={Colors[colorScheme].dark} width="20" height="20" style={{ alginItems: "center", justifyContent: "center" }} />
                                    </TouchableOpacity>
                                    <Animated.Text style={Style.singlePost.smallHeaderText[colorScheme]}>
                                        {
                                            event !== undefined && event.title !== undefined &&
                                            <>
                                                {
                                                    event.title.length > 50 ?
                                                        event.title.slice(0, 50) + '...' :
                                                        event.title
                                                }
                                            </>
                                        }
                                    </Animated.Text>
                                    <TouchableOpacity style={{ flex: 1, width: "10%", alignItems: "center", justifyContent: "center" }} onPress={() => onShare()} >
                                        <ShareIcon name="header-share" color={Colors[colorScheme].dark} width="20" height="20" style={{ alginItems: "center", justifyContent: "center" }} />
                                    </TouchableOpacity>
                                </Animated.View>
                                {/* 
                                    Large header if the view is scrolled up
                                */}
                                <Animated.Text style={[Style.singlePost.largeHeaderText[colorScheme], { opacity: heroTitleOpacity }]}>
                                    {
                                        event !== undefined && event.title !== undefined &&
                                        <>
                                            <View style={{ backgroundColor: Colors[colorScheme].transparent, height: 40, width: "100%", alignItems: "center", justifyContent: "center" }}>
                                                <TouchableOpacity style={{ flex: 1, width: "10%", alignItems: "center", justifyContent: "center" }} onPress={() => navigation.goBack()} >
                                                    <ChevronLeft name="back" color={Colors[colorScheme].light} width="40" height="40" style={{ alignItems: "center", justifyContent: "center" }} />
                                                </TouchableOpacity>
                                            </View>
                                            {"\n"}
                                            <Animated.Text style={[Style.singlePost.categories[colorScheme], { opacity: heroTitleOpacity }]}>
                                                {
                                                    route.params.categories !== undefined
                                                    && route.params.categories.filter(
                                                        (c: string) =>
                                                            c === "Juniorband"
                                                            || c === "Musikalische Frühförderung"
                                                            || c === "Blockflötengruppen"
                                                            || c === "Jugendorchester"
                                                            || c === "Großes Orchester"
                                                            || c === "Horsch e-mol(l)").join(" | ")
                                                }
                                            </Animated.Text>
                                            {"\n"}
                                            {
                                                event.title.length > 90 ?
                                                    event.title.slice(0, 90) + '...' :
                                                    event.title
                                            }
                                            {"\n\n"}
                                            <Animated.View style={{ width: contentWidth - 20, flexDirection: "row", justifyContent: 'space-around', backgroundColor: Colors[colorScheme].transparent, opacity: heroTitleOpacity }}>
                                                <Text>
                                                    <Animated.Text style={[Style.singlePost.author[colorScheme], { opacity: heroTitleOpacity }]}>
                                                        {event.author !== undefined && event.author}
                                                    </Animated.Text>
                                                    {"\n"}
                                                    {
                                                        event !== undefined
                                                        && event.allDayEvent !== undefined
                                                        && event.allDayEvent
                                                        && event.startDate !== undefined
                                                        && event.endDate !== undefined
                                                        && event.startDate === event.endDate &&
                                                        <Moment element={Text} style={Style.listItem.date} format="DD.MM.YYYY" date={event.startDate} />
                                                    }
                                                    {
                                                        event !== undefined
                                                        && event.allDayEvent !== undefined
                                                        && event.allDayEvent
                                                        && event.startDate !== undefined
                                                        && event.endDate !== undefined
                                                        && event.startDate !== event.endDate &&
                                                        <>
                                                            <Moment element={Text} style={Style.listItem.date} format="DD.MM.YYYY" date={event.startDate} />
                                                            <Text style={Style.listItem.date}> - </Text>
                                                            <Moment element={Text} style={Style.listItem.dateWithoutSidePadding} format="DD.MM.YYYY" date={event.endDate} />
                                                        </>
                                                    }
                                                    {
                                                        (event.allDayEvent === undefined || !event.allDayEvent) && event.startDate !== undefined && event.endDate !== undefined &&
                                                        <Moment element={Text} style={Style.listItem.date} format="DD.MM.YYYY | HH:mm U\hr" date={event.startDate} />
                                                    }
                                                </Text>
                                                <TouchableOpacity style={{ flex: 1, width: "10%", alignItems: "flex-end", justifyContent: "center" }} onPress={() => onShare()} >
                                                    <ShareIcon name="share" color={Colors[colorScheme].light} width="20" height="20" style={{ alginItems: "center", justifyContent: "center" }} />
                                                </TouchableOpacity>
                                            </Animated.View>
                                        </>
                                    }
                                </Animated.Text>
                            </ImageBackground>
                        </Animated.View>
                        {/* 
                            Body
                        */}
                        <ScrollView
                            contentContainerStyle={{ paddingTop: HEADER_EXPANDED_HEIGHT }}
                            onScroll={Animated.event(
                                [
                                    {
                                        nativeEvent: {
                                            contentOffset: {
                                                y: scrollY
                                            }
                                        }
                                    }
                                ],
                                { useNativeDriver: false })
                            }
                            scrollEventThrottle={16}>
                            <View style={{ padding: 16 }} >
                                <HTML source={{ html: event !== undefined && event.description !== undefined ? event.description : "<p></p>" }} contentWidth={contentWidth} />
                            </View>
                            {/* 
                                Footer in the body scroll view.
                                Show only if the latitude and longitude of the event is defined.
                            */}
                            {event !== undefined
                                && event.location !== undefined
                                && event.location.latitude !== undefined
                                && event.location.longitude !== undefined &&
                                <View style={Style.eventsPost.footer}>
                                    <View style={Style.eventsPost.footerButtonMenu}>
                                        {/* 
                                            Button to navigate to the events location
                                        */}
                                        <TouchableOpacity
                                            style={Style.listItem.button}
                                            onPress={
                                                (e) => {
                                                    createMapLink({
                                                        latitude: parseFloat(event.location.latitude),
                                                        longitude: parseFloat(event.location.longitude),
                                                        query: event.location.latitude + "," + event.location.longitude,

                                                    })
                                                }}
                                        >
                                            <Navigation name="navigate-button" color={Colors[colorScheme].dark} width={SCREEN_WIDTH / 2} height="20" style={{ alginItems: "center", justifyContent: "center" }} />
                                        </TouchableOpacity>
                                        {/* 
                                            Button to add the event to the private calendar.
                                        */}
                                        <TouchableOpacity
                                            style={Style.listItem.button}
                                            onPress={
                                                () => {
                                                    addToCalendar(event.title);
                                                }
                                            }
                                        >
                                            <Calendar name="calendar-button" color={Colors[colorScheme].dark} width={SCREEN_WIDTH / 2} height="20" style={{ alginItems: "center", justifyContent: "center" }} />
                                        </TouchableOpacity>
                                    </View>
                                    {/* 
                                        The map with a marker of the events place.
                                    */}
                                    <MapView
                                        style={Style.eventsPost.maps}
                                        pointerEvents="none"
                                        region={region}
                                        onRegionChange={onRegionChange}
                                    >
                                        {
                                            event.location !== undefined && event.location.latitude !== undefined && event.location.longitude !== undefined &&
                                            <Marker
                                                coordinate={{ latitude: parseFloat(event.location.latitude), longitude: parseFloat(event.location.longitude) }}
                                                title={event.location.name !== undefined ? event.location.name : ""}
                                            />
                                        }
                                    </MapView>
                                </View>
                            }
                        </ScrollView>
                    </View >
            }
        </>
    );
}

export default SingleEventScreen;