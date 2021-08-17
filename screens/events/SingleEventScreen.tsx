
import React, { useState, useEffect } from 'react';
import { API } from "@env";
import { http } from '../../networking/HttpRequest';
import { ActivityIndicator, Animated, ImageBackground, ScrollView, Share, TouchableOpacity, useWindowDimensions } from 'react-native';
import { View, Text } from '../../components/Themed';
import { ChevronLeft, Share as ShareIcon } from "react-native-feather";
import Style from '../../constants/Style';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import HTML from 'react-native-render-html';

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

const SingleEventScreen = ({ navigation, route }: any) => {
    const [scrollY, setScrollY] = useState(new Animated.Value(0));
    const [loading, setLoading] = useState<boolean>(true);
    const [event, setEvent] = useState<IEvent>();
    const colorScheme = useColorScheme();

    useEffect(() => {
        setLoading(true);

        const getEvent = async () => {
            const eventFromServer = await fetchEvent();
            setEvent(eventFromServer);
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
        } catch (error) {
            alert(error.message);
        }
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
                    <View style={Style.spinnerView[colorScheme]}>
                        <ActivityIndicator color={Colors[colorScheme].dark} />
                    </View> :
                    <View style={Style.singlePost.container[colorScheme]}>
                        <Animated.View style={[Style.singlePost.header[colorScheme], { height: headerHeight }]}>
                            <ImageBackground
                                source={{ uri: event?.thumbnailLink.toString() }}
                                style={Style.singlePost.image}
                                imageStyle={Style.singlePost.imageStyle}>
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
                                                {route.params.categories !== undefined && route.params.categories.filter((c: string) => c === "Jugend" || c === "Großes Orchester" || c === "Horsch e-mol(l)").join(" | ")}
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
                                                    <Animated.Text style={[Style.singlePost.date[colorScheme], { opacity: heroTitleOpacity }]}>
                                                        {event.startDate !== undefined && event.startDate}
                                                    </Animated.Text>
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
                        <ScrollView
                            contentContainerStyle={[Style.singlePost.scrollContainer[colorScheme], { paddingTop: HEADER_EXPANDED_HEIGHT }]}
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
                            <HTML source={{ html: event !== undefined && event.description !== undefined ? event.description : "<p></p>" }} contentWidth={contentWidth} />
                            <View style={{ height: 40 }}></View>
                        </ScrollView>
                    </View >
            }
        </>
    );
}

export default SingleEventScreen;